
const SectionTitle = (props) => {

    return (
        <section>            
            <h1>Please leave a feedback</h1> 
            {props.children};
        </section>
    )
}

export default SectionTitle;