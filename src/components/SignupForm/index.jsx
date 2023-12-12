import { useForm } from "react-hook-form";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    console.log("clear");
    reset();
  };
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Age <input {...register("age", { required: true })} />
        {errors.age && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Address <input {...register("address", { required: true })} />
        {errors.address && <span>This field is required</span>}
      </label>
      <br />
      <label>
        ZipCode <input {...register("zipcode", { required: true })} />
        {errors.zipcode && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Phone <input {...register("phone", { required: true })} />
        {errors.phone && <span>This field is required</span>}
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
