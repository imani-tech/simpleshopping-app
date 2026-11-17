import classes from '../styles/Deliveryinfo.module.css'
export default function DeliveryInfo(){
    return (
        <>
    <section className={classes.info}>
        <div className={classes["info-des"]}>
            <i className="fa-solid fa-shield"></i>
            <div className={classes["text-info"]}>
            <p className={classes["primary-info"]}>Secure Payment</p>
            <p className={classes["secondary-info"]}>100% secure checkout</p>
            </div>
        </div>

        <div className={classes["info-des"]}>
          <i className="fa-solid fa-truck-fast"></i>
           <div className={classes["text-info"]}>
            <p className={classes["primary-info"]}>Free Shipping</p>
            <p className={classes["secondary-info"]}>On orders over $150</p>
            </div>
        </div>

        <div className={classes["info-des"]}>
            <i className="fa-solid fa-phone"></i>
             <div className={classes["text-info"]}>
            <p className={classes["primary-info"]}>24/7 Support</p>
            <p className={classes["secondary-info"]}>We're here to help</p>
           </div> 
        </div>

        
    </section> 
        </>
    )
}