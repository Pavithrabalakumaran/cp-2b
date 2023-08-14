const Notification = props => {
  {const className, iconUrl, message} = props
   const containerClassName = `notification-container ${className}`

  return (
    <div className = {containerClassName}>
        <img className = "icon" src = {iconUrl} />
        <p className = "message" >{message} </p>
     </div>
  )
}

const element = (
     <div className = "notification-app-container">
        <h1 className = "title"> Notifications </h1>
 </div>
)

ReactDOM.render(element, document.getElementById('root'))
