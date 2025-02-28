import Header from './Header'

function AboutUs() {
    const style = {
        header: {
            backgroundColor: 'cornflowerblue', display: 'flex', width: '100%', marginTop: '-80px',
            padding: '15px 20px', marginRight: '150px', marginBottom: '80px',
        },
        a: {
            textDecoration: "none"
        },
        Link: {
            textDecoration: "none"
        }
    }

    return (
        <>
            <div>

                <Header style={style} />
            </div>
            <div className='aboutus' style={{ marginTop: '60px', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h2 style={{ marginBottom: '35px' }}>Hello Buddy</h2>
                <span style={{ MarginBottom: '15px', marginTop: "35px" ,marginLeft:"40px",fontSize:"20px",
                    fontWeight:"400"
                }}>Hey I Am Moin I AM In 7th standard <br /></span>
                <p style={{ marginTop: "25px" }}>
                    ● Front End Developer: This expert focuses on an application or website's visible and interactive aspects that users directly engage with.  <br />
                    ● I Know how to make  Reusable components, dynamic tables, real-time updates, API handling.  <br />
                    ● I made plenty of projects and use Reusable components and made them Responsive as well </p >
            </div>
        </>
    )
}
export default AboutUs