import styles from "../styles/comingsoon.module.css"
import { useRef , useState, useEffect} from "react";


const ComingSoon = () => {

    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            console.log(timer)
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    if(timer === 0){
        window.location.href = "https://drive.google.com/file/d/1uw9TjAmmWxO8I7bELFVwjSi8JkXQ6QL1/view"
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.Soon}>
                    <p className={styles.p}>Launching the Blazingly Fast website of Asose Sector 5</p>
                    <h1 className={styles.h1}>COMING SOON</h1>
                    <hr className={styles.hr}/>
                    <p className={styles.p} id="launch">{timer}</p>
                    <a href="https://drive.google.com/file/d/1uw9TjAmmWxO8I7bELFVwjSi8JkXQ6QL1/view">Launch</a>
                </div>
            </header>
        </>
    )
}

// const Trailer = () => {
//     const myCallback = () => Router.push("/");
//     return(

//     // <video autoplay onEnded={() => myCallback()}>
//     //     <source src={"https://drive.google.com/file/d/1uw9TjAmmWxO8I7bELFVwjSi8JkXQ6QL1/view"} type="video/mp4" />
//     // </video>
//     // <iframe src="https://drive.google.com/file/d/1uw9TjAmmWxO8I7bELFVwjSi8JkXQ6QL1/preview" width="640" height="480" allow="autoplay"></iframe>
//     )
// }

export default ComingSoon