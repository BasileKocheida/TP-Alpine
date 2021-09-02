import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';



const mapStateToProps = (state) => {
  return { 
      pictures: state.pictures
    }
};

function ModelisationConnect({pictures}) {

    function displayItemCarousel(){
        return Object.keys(pictures).map((key)=>{
            return  (
                <Carousel.Item>
                    <div className="modelisation d-flex justify-content-center">
                        <img
                            className="d-block image"
                            src={pictures[key]}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            )
        })
    }
    return (
        <Carousel className='carousel'>
            {displayItemCarousel()}
        </Carousel>
    )
}
const Modelisation = connect(mapStateToProps)(ModelisationConnect);

export default Modelisation;

