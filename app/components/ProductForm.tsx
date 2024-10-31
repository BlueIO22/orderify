import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateProductInput, Product } from "../api/product";

export default function ProductForm({
  onSubmit,
  product,
}: {
  onSubmit: (data: CreateProductInput) => void;
  product?: Product;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateProductInput>();

  const someErrors = errors.name || errors.description || errors.price;

  const [name, setName] = useState(product?.name);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);

  const hasBeenEdited =
    name !== product?.name ||
    description !== product?.description ||
    price !== product?.price;

  function onHandleSubmit(value) {
    let formData = value;
    if (product) {
      formData = {
        ...value,
        id: product.id,
      };
    }
    onSubmit(formData);
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onHandleSubmit)}
      className="w-[600px] [&>div]:p-5 [&>div]:flex [&>div]:flex-col [&>div>input]:text-xl [&>div>input]:p-2 [&>div>label]:text-xl [&>div>input]:border-2 [&>div>textarea]:border-2 [&>div>textarea]:p-2 [&>div>textarea]:text-xl"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", {
            required: true,
            validate: (value) => {
              return (
                (value.length > 3 && value.length < 100) ||
                "Name must be between 3 and 100 characters"
              );
            },
          })}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          id="name"
          placeholder={product ? product.name : "Enter name..."}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", {
            required: true,
            validate: (value) => {
              return (
                value.length > 3 ||
                "The description must be greater than 3 characters"
              );
            },
          })}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          name="description"
          id="description"
          placeholder={product ? product.description : "Enter description..."}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          {...register("price", {
            required: true,
            validate: (value) => {
              return (
                (!isNaN(value) && value > 10) || "Price must be 10 or more"
              );
            },
          })}
          onChange={(event) =>
            setPrice(event.target.value as unknown as number)
          }
          value={price}
          type="number"
          name="price"
          id="price"
          placeholder={product ? "" + product.price : "Enter price..."}
        />
      </div>
      <div>
        {(!product || hasBeenEdited) && (
          <button
            type="submit"
            className="border-2 py-2 text-lg w-full cursor-pointer hover:bg-primary hover:text-white"
          >
            {product ? "Update product" : "Create product"}
          </button>
        )}
      </div>
      {someErrors && (
        <div className="px-10 [&>p]:text-lg">
          <h2 className="text-2xl">Cannot submit form</h2>
          {errors.name?.message && <p>- {errors.name?.message}</p>}
          {errors.description?.message && (
            <p>- {errors.description?.message}</p>
          )}
          {errors.price?.message && <p>- {errors.price?.message}</p>}
        </div>
      )}
    </form>
  );
}
