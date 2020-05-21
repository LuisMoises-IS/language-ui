import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {ILanguage} from "../interfaces/language";
import {ICategory} from "../interfaces/category"

import {getLanguages, getLanguage} from "../services/languages";
import {getCategoriesWLanguages} from "../services/categories";
import Categories from "./categories";



const LanguageWCategory: React.FC = () => { 

    const [languages,setLanguages] = useState([]);
    const [update,setUpdate] = useState(true);
    const [categories, setCategories] = useState([]);
    

  

    useEffect(()=>{
        if(update){
            getLanguages().then( r=>{                
                setUpdate(false);
                setLanguages(r.data);
            });
        }      
    },[update]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title="Categoria"> </Subheader>
                
                <div className="row text-center">
                    
                    {languages.map((lan: ILanguage,index) => (
                        <Card 
                            title={lan.name} 
                            description={lan.description} 
                            key={lan._id} 
                            category={lan.category[0].name}
                            LanguageId={lan._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default LanguageWCategory;