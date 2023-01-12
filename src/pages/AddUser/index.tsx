import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormComponent from '../../component/Form'
import {  SubmitUserProps, UserProps } from '../types';
import { useDispatch } from 'react-redux';
import actions from '../../redux/userRedux/action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';



function AddUser() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(actions.getUsers())
  },[])

  const user:any = useSelector((state) => state)
  const userarr = user.user.allUsers
  const lastid = userarr[userarr.length - 1 ]
 
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Fullname is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
   
     
    username: Yup.string()
      .required('Username is required'),
    phone: Yup.string()
      .required('Phone number is required'),
    company: Yup.string()
        .required('Company name is required')
  });

  const random = require("simple-random-number-generator");

const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm<SubmitUserProps>({ mode: "onTouched", resolver: yupResolver(validationSchema) });

  
   
      const onSubmit = (data:SubmitUserProps) => {
        
        const address = {
          city:data.address ? data.address : "Kathmandu"
        }

        const company = {
          name: data.company
        } 
        const userdata:UserProps = {
              id: (lastid.id)+1,
              name:data.name,
              username:data.username,
              email:data.email,
              address:address ,
              phone:data.phone,
              company:company,

        }
        dispatch(actions.addUser(userdata))
        console.log(data)
      }
      
      const onchangehandle = (e: React.ChangeEvent<HTMLInputElement>) => {

        console.log(e.target.value)
    } 
 
let params = {
  min: 10,
  max: 100,
  integer: true
};
const randomnumber = random(params)
    const user_name = watch('name')
    const username_unique = user_name?.concat(randomnumber)
    console.log(username_unique)

  return (
    <div>
       <h5> Add User </h5>
       <form onSubmit={handleSubmit(onSubmit)}>

           <div className="row mt-4">
           <div className="col col-lg-6 col-sm-12 ">
           <FormComponent onChange={onchangehandle} label="Name" placeholder="name" errormessage={errors?.name?.message}  register={register("name")} type="text" />
           </div>
           <div className="col col-lg-6 col-sm-12">
           <FormComponent defaultValue={ user_name && username_unique}   label="Username" placeholder="username" errormessage={errors?.username?.message} register={register("username")} type="text" />
           </div>
           <div className="col col-lg-6 col-sm-12">
           <FormComponent  label="Email" placeholder="email" register={register("email")} errormessage={errors?.email?.message} type="email" />
           </div>
           <div className="col col-lg-6 col-sm-12">
           <FormComponent  label="Address" placeholder="address" register={register("address")}  errormessage={errors?.address?.message} type="text" />
           </div>
           <div className="col col-lg-6 col-sm-12">
           <FormComponent  label="Phone" placeholder="phone" register={register("phone")} errormessage={errors?.phone?.message} type="number" />
           </div>
           <div className="col col-lg-6 col-sm-12">
           <FormComponent  label="Company Name" placeholder="company name" register={register("company")} errormessage={errors?.company?.message} type="text" />
           </div>
          
           </div>
           <div className="form-bottom-group">
           <button type="button" className="btn btn-secondary">Clear</button>
           <button type="submit"  className="btn ml-2 btn-success">Submit</button>
            </div>
            </form>
    </div>
  )
}

export default AddUser
