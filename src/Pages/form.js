import { useForm } from 'react-hook-form';
import '../App.css';
import './form.css';
import React from 'react';
import houseHandler from '../Handler/houseHandler';
import Footer from "../Components/footer";
import { Link } from 'react-router-dom';

function Form() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("img", reader.result);
    };
  }

  const onSubmit = (data) => {
    houseHandler.addHouse(data)
    console.log(data)
    // return window.alert("Producto agregado a su cuenta");
  }

  return (
    <>
    <div id="myForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="price" id="price">€/Noche</label>
          <input id="price" placeholder='€/Noche' {...register("price", { required: true })} />
          {errors.price && <span>€/noche</span>}
        
          <br></br>

          <label htmlFor="title" id="title">Título de la vivienda</label>
          <input id="title" placeholder='Título de la vivienda' {...register("title", { required: true })} />
          {errors.title && <span>Indique un título para el piso</span>}

          <br></br>

          <label htmlFor="category" id="category">Tipo de vivienda</label>
          <select id="category" name="category" {...register("category", { required: true })}>
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

          <label htmlFor="bedrooms" id="bedrooms">Nº habitaciones</label>
          <input id="bedrooms" placeholder='Nº habitaciones' type="number" min="0" {...register("bedrooms", { required: true })} />
          {errors.bedrooms && <span>Nº de habitaciones</span>}

          <label htmlFor="bathrooms" id="bathrooms">Nº Baños</label>
          <input id="bathrooms" placeholder='Baños' type="number" min="0" {...register("bathrooms", { required: true })} />
          {errors.bathrooms && <span>Nº de baños</span>}

          <label htmlFor="persons" id="bathrooms">Nº Personas</label>
          <input id="persons" placeholder='Personas' type="number" min="0" {...register("persons", { required: true })} />
          {errors.persons && <span>Nº de personas</span>}
        
          <br></br>

          <label htmlFor="description" id="description">Descripción de la vivienda</label>
          <textarea id="description" rows="6" cols="35" placeholder="Descripción de la vivienda" {...register("description", { required: true })}
          pattern="[A-Za-z0-9]"></textarea>
          {errors.description && <span>Indique cómo es la vivienda</span>}

          <br></br>

          <label htmlFor="city" id="city">Localidad</label>
          <input id="city" placeholder='Localidad'{...register("city", { required: true })} />
          {errors.city && <span>Indíquenos su localidad</span>}

          <br></br>

          <label htmlFor="province" id="province">Provincia</label>
          <input id="province" placeholder='Provincia'{...register("province", { required: true })} />
          {errors.province && <span>Indíquenos su provincia</span>}
        
          <br></br>
          
          <input id="exchange" placeholder='exchange' type="checkbox" value="True" className="inline" {...register("exchange")} />
          <label htmlFor="exchange" id="exchangeP">Disponible para intercambio</label>

          <br></br>

          <input id="animals" placeholder='animals' type="checkbox" value="True" className="inline" {...register("animals")} />
          <label htmlFor="animals" id="animalsP">Acepta mascotas</label>

          <br></br>

          <input id="pool" placeholder='pool' type="checkbox" value="True" className="inline" {...register("pool")} />
          <label htmlFor="pool" id="poolP">Tiene piscina</label>

          <br></br>
          <br></br>

          <input id="img" placeholder='Foto de la vivienda' type="file" onChange={handleImageChange} />
          {errors.img && <span>Debe rellenar este campo</span>}
          
          <br></br>

          <input id="terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />
          {errors.terms && <span>Debe rellenar este campo</span>}
          <label htmlFor="terms" id="termsP">Acepto los términos y condiciones</label>

          <br></br>

          <div id="button">
          <input id="submit" type="submit" value="GUARDAR" />
          <input id="reset" type="reset" value="LIMPIAR" />
          <div>
          <Link to="/landing"><input id="return" type="button" value="VOLVER" /></Link>

    </div>
          </div>
        </fieldset>

        

      </form>
    </div>
    <Footer />
    </>
  );

}

export default Form
