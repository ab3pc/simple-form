import Head from 'next/head';
import { useForm } from 'react-hook-form';



export default function Home() {
  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }


  return (
  <>
  <Head>
    <title>Simple form with react-hook-form</title>
  </Head>
    <div className="wrapper">
    <h1>Simple form with react-hook-form</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__group">
      <label for = "firstName">
        First Name:

        
      </label>
      <input id="firstName"
            {...register('firstName', {
              required: 'Required! Please, enter First Name.',
              minLength: {
                value: 5,
                message: "Min 5 character!"
              }
              
            } )}
      />
      <div style= {{height: 20, marginBottom:10}}>
        {errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>}
      </div>

      </div>

      <div className="form__group">
      <label for = "lastName">
        Last Name:

        
      </label>
      <input id="lastName"
            {...register('lastName', {
              required: 'Required! Please, enter Last Name.',
              minLength: {
                value: 5,
                message: "Min 5 character!"
              }
              
            } )}
      />
      <div style= {{height: 20, marginBottom:10}}>
        {errors?.lastName && <span>{errors?.lastName?.message || "Error!"}</span>}
      </div>

      </div>
    <input className="form__submit" type="submit" disabled={!isValid} />
     
    </form>

    </div>
   
  </>
  )
}
