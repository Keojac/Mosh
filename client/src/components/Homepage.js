import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function Carousels() {
    return (
        <div>
            <hr />
            <h4 className="browse">Connect through Events</h4>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/silhouette-young-lady-crowd-during-concert_181624-27673.jpg?w=996&t=st=1660798112~exp=1660798712~hmac=8d41c9d701252706c1b9dc824102228f8b7fc66151f17310c69db969b7d43808"
                        alt="Music Gig"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/horizontal-shot-crowded-yankee-baseball-stadium-players-field_181624-19786.jpg?w=996&t=st=1660798232~exp=1660798832~hmac=44cecabcee8b918dbe4e50f600b2f86a670d53b4182c007372b54d8c6bb514ac"
                        alt="Baseball Match"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/national-palace-ceiling-interior-barcelona_1268-17946.jpg?w=996&t=st=1660798496~exp=1660799096~hmac=9c99e1cbea48f1eff22357c03f1cdf5b98ad14d21eca47a16295d959c07147d2"
                        alt="National Palace Ceiling"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/audience-applauding-speaker-after-conference-presentation_107420-63802.jpg?w=996&t=st=1660798621~exp=1660799221~hmac=e6b55ab6ae5865a8a27ab5ce8768a7853c8175728e2b8f7f043439852839f8ec"
                        alt="Audience applauding speaker at conference"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/group-happy-african-volunteers-hold-blank-board-with-unity-sign-park-africa-volunteering-charity-people-ecology-concept_627829-324.jpg?w=996&t=st=1660798697~exp=1660799297~hmac=5eaece6705159b6ecc40f441dc58c081b13d0dc59dcfbe511bd3070ca2866361"
                        alt="Gardening Volunteers"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://img.freepik.com/free-photo/young-asia-businessman-using-laptop-talk-colleagues-about-plan-video-call-meeting-while-work-from-home-living-room-self-isolation-social-distancing-quarantine-corona-virus-prevention_7861-2638.jpg?w=996&t=st=1660798802~exp=1660799402~hmac=e76da94bd81cee36283ae913feb5600bad77ab7fb99d409abdf89a309ac874c0"
                        alt="Person attending online meeting"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }

    const Home = () => {
        return (
            <div className="carousel-container">
                <h2>Create your own crew to mosh at events with</h2>
                <Carousels />
                <div className="mission">
                    <br />
                    <br />
                    <p>Our mission is to make events more accessible to everyone. We don't want factors such as
                        age, genre or not having someone to go with limit someone from attending something they enjoy.
                        So we wanted to make something that could bring people together over a shared love for their interests.
                    </p>
                </div>
            </div>
        )
    }


export default Home