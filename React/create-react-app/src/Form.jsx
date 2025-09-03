function handleFormSubmit(event){
    console.log(event);
    event.preventDefault();
    console.log("form submitted successfully");
}
export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" />
            <button>Submit</button>
        </form>
    );
}