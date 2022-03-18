import {React, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  getAllGenres, getPlatforms, postGame } from '../../reducer/action';
import {useDispatch, useSelector} from 'react-redux'
import { FormCont } from '../../Styles/Form/form';
import { InputForm, TextArea, SelectorForm, UlCont, SelButton } from '../../Styles/Form/form';

function validate(input){
    let error={};
    if(!input.name){
    error.name= 'A name is required...'
    }
    if(!input.description){
    error.description= 'A description is required...'
    }
     if(!input.released){
    error.released= 'A released date is required...'
    }else if(!/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(input.released)){
        error.released='Error.';
    }
    if(!input.image){
        error.image= 'A image is required...'
    }
    if(!input.description){
        error.description= 'Please full the camp...'
    }
    if(!input.rating && input.rating < 0 && input.rating > 5){
        error.rating= 'The rating must be < 0 & > 5...'
        }
        if (!input.image.includes("https://" || "http://") &&
            !input.image.includes(".jpg" || ".jpeg" || ".png")
          ) {
            error.image = "Enter a valid URL (.jpg, .jpeg, .png)";
          }
    return error;
}



export default function Forms(){
    const dispatch= useDispatch();
    const history= useNavigate();
    const generes= useSelector((state)=> state.genre);
   
    const plataforms= useSelector((state)=>state.platforms);
    const[error, setError]= useState({});

    const[input, setInput]= useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        platforms:[],
        image:'',
        genres:[]

    })

    
function deleteGenre(g){
    setInput({
        ...input,
        genres: input.genres.filter((el)=> el!== g)
    });
    setError(
        validate({
        ...input,
        genres: [...input.genres]
    }))

}
function deletePlatform(p){
    setInput({
        ...input,
        platforms: input.platforms.filter((el)=> el!== p)
    });
    setError(
        validate({
        ...input,
        platforms: [...input.platforms]
    }))
    
}

    function handleSelectGenre(e){
       console.log(handleSelectGenre)
       if(!input.genres.includes(e.target.value)){
        setInput({
            ...input,
            genres:[ ...input.genres ,e.target.value]
        })

       }
        
    }

    function handleSelectPlatform(e){
        
        if(!input.platforms.includes(e.target.value)){
         setInput({
             ...input,
             platforms:[ ...input.platforms ,e.target.value]
         })
 
        }
         
     }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(input)
    }


    function handleSubmit(e){
        e.preventDefault();
        setError(validate(input))
        const errorSave= validate(input)
        if(Object.values(errorSave).length !==0){
            alert('Please, fullfil the required camps ')
          }else{
              
              dispatch(postGame(input));
              alert('Prithee, be careful. I dont want to see m work squandered!');
              history('/videogames');
          }
          setInput({
            name:"",
            description:"",
            released:"",
            rating:"",
            platforms:[],
            image:"",
            genres:[]
    
        })
    }



    useEffect(()=>{
        dispatch(getAllGenres());
        dispatch(getPlatforms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])





    return(
        <FormCont>
            <h1>FORGE A NEW REALITY</h1>
            <div>
                <form>
                    <div>
                    <label>Name: </label>
                    <InputForm 
                    type='text'
                    value={input.name}
                    name='name'
                     onChange={(e)=>handleChange(e)}/>
                     {
                         error.name && (
                             <p className='err'>{error.name}</p>
                         )
                     }
                    </div>
                    <div>
                    <label>Released: </label>
                    <InputForm
                    type='date'
                    value={input.released}
                    name='released'
                    onChange={(e)=>handleChange(e)} />
                    {
                        <p className='err'>{error.released}</p>
                    }
                    </div>
                    
                    <div>
                    <label>Rating: </label>
                    <InputForm
                    type='number'
                    max='5'
                    min='0'
                    value={input.rating}
                    name='rating'
                    onChange={(e)=>handleChange(e)}/>
                    {
                        <p className='err'>{error.rating}</p>
                    }
                    </div>
                    <div>
                    <label>Platforms: </label>
                    <SelectorForm onChange={(e)=>handleSelectPlatform(e)}>
                        {
                            plataforms.map((plat)=>{
                                return(
                                    <option value={plat} key={plat}>{plat}</option>
                                )
                            })
                        }
                    </SelectorForm>                            
                    </div>
                    <div>
                    <label>Genres:</label>
                    <SelectorForm
                    onChange={(e)=>handleSelectGenre(e)}>
                       {
                           generes?.map((gen)=>{
                               return(
                                   <option value={gen.name} key={gen.name}>{gen.name}</option>
                               )
                           })
                       }
                    </SelectorForm>
                    </div>
                    <div>
                    <ul>{input.platforms?.map((el)=>{
                        return(
                            (<UlCont key={el}>
                                <li>{el}</li>
                            <SelButton onClick={()=>{deletePlatform(el)}}>x</SelButton>
                            </UlCont>)
                            )})}
                            </ul>
                    
                    </div>
                    <div>
                    <ul>{input.genres?.map((el)=>{return((<UlCont key={el}>
                    <div>
                    <li>{el}</li>
                    </div>
                    <div>
                    <SelButton onClick={()=>{deleteGenre(el)}}>x</SelButton>
                    </div>
                    </UlCont>))})}</ul>
                    </div>
                    <div>
                    <label>Image: </label>
                    <InputForm
                    type='url'
                    value={input.image}
                    name='image'
                    onChange={(e)=>handleChange(e)}/>
                     {
                        <p className='err'>{error.image}</p>
                    }
                    </div>

                    <div>
                    <label>Description: </label>
                    <TextArea
                    type='text'
                    value={input.description}
                    name='description'
                    onChange={(e)=>handleChange(e)}/>
                     {
                        <p className='err'>{error.textarea}</p>
                    }
                    </div>
                    <div>
                        <SelButton type='submit' onClick={(e)=>handleSubmit(e)}>Submit</SelButton>
                    </div>
                </form>
            </div>
            <div>
            <Link to='/videogames'>
            <SelButton>BACK</SelButton>
            </Link>
            </div>
        </FormCont>
    )
}
