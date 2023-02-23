import { useForm } from 'react-hook-form';
import '../App.css';
import React, { useState } from 'react';
import houseHandler from '../Handler/houseHandler';
import Footer from "../Components/footer";

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
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>

        <input id="price" placeholder='Precio' {...register("price", { required: true })} />
        {errors.price && <span>€/noche</span>}
        
        <br></br>

        <input id="title" placeholder='Título del piso' {...register("title", { required: true })} />
        {errors.title && <span>Indique un título para el piso</span>}

        <br></br>

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

        <br></br>

        <input id="bedrooms" placeholder='Nº habitaciones' {...register("bedrooms", { required: true })} />
        {errors.bedrooms && <span>Nº de habitaciones</span>}

        <input id="bathrooms" placeholder='Baños' {...register("bathrooms", { required: true })} />
        {errors.bathrooms && <span>Nº de baños</span>}

        <input id="persons" placeholder='Personas' {...register("persons", { required: true })} />
        {errors.persons && <span>Nº de personas</span>}
        
        <textarea id="Description" rows="6" cols="50" placeholder="Description. Maximum 250 characters."
      minlength="0" maxlength="250" pattern="[A-Za-z0-9]"></textarea>
        {errors.description && <span>Indique cómo es la vivienda</span>}

        <input id="city" placeholder='Localidad'{...register("city", { required: true })} />
        {errors.city && <span>Indíquenos su localidad</span>}

        <input id="province" placeholder='Province'{...register("province", { required: true })} />
        {errors.province && <span>Indíquenos su provincia</span>}
        
        <fieldset>

          <input id="exchange" placeholder='exchange' type="checkbox" value="True" className="inline" {...register("exchange")} />Disponible para intercambio
          
          <br></br>

          <input id="animals" placeholder='animals' type="checkbox" value="True" className="inline" {...register("animals")} />Acepta mascotas
          
          <br></br>

          <input id="pool" placeholder='pool' type="checkbox" value="True" className="inline" {...register("pool")} />Tiene piscina
          
          <br></br>

          <input id="productPicture" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
          {errors.productPicture && <span>Debe rellenar este campo</span>}
          
          <br></br>

          <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />Acepto los términos y condiciones
          {errors.terms && <span>Debe rellenar este campo</span>}

        </fieldset>
      </fieldset>

      <input id="submit" type="submit" value="GUARDAR" />
      <input id="reset" type="reset" value="LIMPIAR" />

    </form>
    <Footer />
    </>
  );

}

export default Form