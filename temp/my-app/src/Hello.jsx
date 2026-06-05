function Hello(){
    function getName(yourName){
        return "Mr. " + yourName;
    }

    const myName = "Shashank Shekhar Singh";

    return (
        <>
         <h1>Hello, {getName(myName)}</h1>
        </>
    )
}
export default Hello;