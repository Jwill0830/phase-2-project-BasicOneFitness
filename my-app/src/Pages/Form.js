function Form(){
    return(
        <>
        <header>
            
        </header>
            <main>
                <h1>Become a Coach</h1>
                <form>
                    <div>
                        <label htmlFor="FirstName">First Name:</label>
                        <input id="FirstName" type="text" name="FirstName" placeholder="Firstname"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="lastname">Last Name:</label>
                        <input id="lastname" type="lastname" name="lastname" placeholder="LastName"/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    );
};
export default Form