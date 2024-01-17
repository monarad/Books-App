import React, { useState } from 'react'
import styles from "./BookCard.module.css"
import { FaHeart } from "react-icons/fa";

function BookCard({data,handleLikedList}) {
  const{author,image,language,pages,title}=data
  const[like,setLike]=useState(false)
  const likeHandler=()=>{
    handleLikedList(data,like)
    setLike(like=>!like)
    console.log(setLike)
  }
  return (
    <div className={styles.container}>
        
            <img src={image} alt={title}/>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages}</span>
                </div>
            </div>
            <button onClick={likeHandler}>
              {/* {like ? < FaHeart color='red' fontSize="1.8rem" />: < FaHeart color='#fff' fontSize="1.8rem" />} */}
              < FaHeart color={like ? "red" :"e0e0e0"} fontSize="1.8rem" />
            </button>
        
    </div>
  )
}

export default BookCard