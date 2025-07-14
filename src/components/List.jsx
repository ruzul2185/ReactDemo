


const List = ({ data, handleText }) => {

  const text="This is child!";

  return (
    <div>
        {data.map((item)=>{
            return(<div key={item.id}>
                <div>ID: {item.id}</div>
                <div>Title: {item.title}</div>
                <div>Body: {item.body}</div>
                <br/>
            </div>)
        })}
        {handleText(text)}
    </div>
  )
}

export default List

const Home = () => {

  const text = "This is child!";

  return(<div>
    Home
    {text}
  </div>)
}

function About() {}