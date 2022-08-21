import './Card.css'

const Card=(props)=>
{

const currentclass=props.class + " card"

    return(
        <div className={currentclass}>
          {props.children}
        </div>
    )
}

export default Card