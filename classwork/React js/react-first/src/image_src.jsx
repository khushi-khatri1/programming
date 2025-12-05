
function abc(){
  alert('this is correct syntax');
}

function Image() {

  let image_1 = "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
  return (
    <>
    <img src={image_1} alt="" height="150px"/>
    <h4>click below button...</h4>
    <button onClick={abc}>submit</button>
    </>
  )
}

export default Image