import '../css/app.css';

export const NormalFile = () => {
  let {clas}="hlo"
  let number =["number 1","number 2","number3"]
  let name =[
    {nam:"John Doe"},
    {nam:"Jane Smith"},
    {nam:"Eve Green"}
  ]
  return (
    <>
      <h1 className={clas}>Normal File</h1>
      <p>35 + 20 = {35+20}</p>
      {number}
      <ul>{name.map((name)=>(
          <li key={name.nam}>{name.nam}</li>
          ))}
      </ul>
    </>
  )
}

