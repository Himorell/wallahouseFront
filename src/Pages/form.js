import { useForm } from 'react-hook-form';
import '../App.css';
import React, { useState } from 'react';
import houseHandler from '../Handler/houseHandler';
import Footer from "../Components/footer";

// function Form() {
//   const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

//   const handleImageChange = (event) => {
//     const picture = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(picture);
//     reader.onload = () => {
//       setValue("img", reader.result);
//     };
//   }

//   const onSubmit = (data) => {
//     console.log(data)
//     houseHandler.addHouse(data)
//     return window.alert("Casa agregada a su cuenta");
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <fieldset>
//         <input id="price" placeholder='Precio por noche' {...register("price", { required: true })} />
//         {errors.price && <span>€/noche</span>}

//         <input id="title" placeholder='Título de la casa' {...register("title", { required: true })} />
//         {errors.title && <span>Título de la casa</span>}

//         <input id="img" placeholder='Foto de la casa' type="file" onChange={handleImageChange} />
//           {errors.img && <span>Incluya una foto de la casa</span>}

//         <select id="Category" name="category" {...register("category", { required: true })}>
//         {errors.category && <span>Debe rellenar este campo</span>}
//             <option value="selecciona">selecciona...</option>
//             <option value="playa">Casa en la playa</option>
//             <option value="rural">Casa rural</option>
//             <option value="cabaña">Cabaña</option>
//             <option value="piscina">Casa con piscina</option>
//             <option value="turistica">Turística</option>
//             <option value="naturales">Naturales</option>
//         </select>

//         <input id="bedrooms" placeholder='Nº habitaciones' type="number" {...register("bedrooms", { required: true })} />
//         {errors.bedrooms && <span>Nº habitaciones</span>}

//         <input id="bathrooms" placeholder='Nº baños' type="number" {...register("bathrooms", { required: true })} />
//         {errors.bathrooms && <span>Nº baños</span>}

//         <input id="persons" placeholder='Nº personas' type="number" {...register("persons", { required: true })} />
//         {errors.persons && <span>Nº personas</span>}

//         <input id="description" placeholder='Descripción' {...register("description", { required: true })} />
//         {errors.description && <span>Debe rellenar este campo</span>}

//         <input id="city" placeholder='Localidad'{...register("city", { required: true })} />
//         {errors.city && <span>Indique la localidad</span>}

//         <input id="province" placeholder='Provincia'{...register("province", { required: true })} />
//         {errors.province && <span>Indique la provincia</span>}

//         <input id="exchange" placeholder='exchange' type="checkbox" value="checkbox" className="inline" {...register("exchange", { required: true })} />Disponible para intercambio
//         {errors.exchange && <span>Debe rellenar este campo</span>}

//         <input id="pool" placeholder='pool' type="checkbox" value="checkbox" className="inline" {...register("pool", { required: true })} />Piscina
//         {errors.pool && <span>Debe rellenar este campo</span>}

//         <input id="animals" placeholder='animals' type="checkbox" value="checkbox" className="inline" {...register("animals", { required: true })} />Mascotas permitidas
//         {errors.animals && <span>Debe rellenar este campo</span>}

//         <fieldset>
//         <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />Acepto los términos y condiciones
//         {errors.terms && <span>Debe rellenar este campo</span>}
//         </fieldset>

//       </fieldset>

//       <input id="submit" type="submit" value="UPLOAD" />
      
//     </form>
//     <Footer />
//     </>
//   );

// }

function Form() {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("productPicture", reader.result);
    };
  }

  const onSubmit = (data) => {
    houseHandler.addHouse(data)
    console.log(data)
    // return window.alert("Producto agregado a su cuenta");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <input id="title" placeholder='Título del piso' {...register("title", { required: true })} />
        {errors.title && <span>Indique un título para el piso</span>}

        <select id="Category" name="category" {...register("category", { required: true })}>
        {errors.category && <span>Debe rellenar este campo</span>}
            <option value="selecciona">selecciona...</option>
            <option value="playa">Casa en la playa</option>
            <option value="rural">Casa rural</option>
            <option value="cabaña">Cabaña</option>
            <option value="piscina">Casa con piscina</option>
            <option value="turistica">Turística</option>
            <option value="naturales">Naturales</option>
        </select>

      
        <input id="price" placeholder='Precio' {...register("price", { required: true })} />
        {errors.price && <span>€/noche</span>}

        <input id="bedrooms" placeholder='Nº habitaciones' {...register("bedrooms", { required: true })} />
        {errors.bedrooms && <span>Nº de habitaciones</span>}

        <input id="bathrooms" placeholder='Baños' {...register("bathrooms", { required: true })} />
        {errors.bathrooms && <span>Nº de baños</span>}

        <input id="persons" placeholder='Personas' {...register("persons", { required: true })} />
        {errors.persons && <span>Nº de personas</span>}
        
        <input id="description" placeholder='Descripción' {...register("description", { required: true })} />
        {errors.description && <span>Indique cómo es la vivienda</span>}

        <input id="city" placeholder='Localidad'{...register("city", { required: true })} />
        {errors.city && <span>Indíquenos su localidad</span>}

        <input id="province" placeholder='Province'{...register("province", { required: true })} />
        {errors.province && <span>Indíquenos su provincia</span>}
        
        <fieldset>

          <input id="exchange" placeholder='exchange' type="checkbox" value="True" className="inline" {...register("exchange")} />Disponible para intercambio
          
          <input id="animals" placeholder='animals' type="checkbox" value="True" className="inline" {...register("animals")} />Acepta mascotas
          
          <input id="pool" placeholder='pool' type="checkbox" value="True" className="inline" {...register("pool")} />Tiene piscina

          <input id="productPicture" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
          {errors.productPicture && <span>Debe rellenar este campo</span>}

          <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />Acepto los términos y condiciones
          {errors.terms && <span>Debe rellenar este campo</span>}

        </fieldset>
      </fieldset>

      <input id="submit" type="submit" value="GUARDAR" />
      <input id="reset" type="reset" value="LIMPIAR" />

    </form>
  );

}

export default Form