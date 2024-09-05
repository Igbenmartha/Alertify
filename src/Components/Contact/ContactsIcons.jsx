import React from 'react'
import "./ContactIcons.css"
import coment from "../../assets/Vector.svg"
import call from "../../assets/calIIcon.svg";
import email from "../../assets/EmailPic.svg";



const ContactsIcons = () => {
    const data = [
      {
        hg: "300px",
        img: coment,
        wd:"322px",
        text1:"Chat with us",
        text2:"Get help online or visit our FAQ for more answers",
        text3:"Start Chat"
      },
      {
        hg: "320px",
        wd:"346px",
        img:call,
        text1:"Call us",
        text2:" Reach customer support(234)902-694-5330.",
        text3:"Call Now"
      },

      {
        hg: "322px",
        wd:"359px",
        img:email,
        text1:"Email Us",
        text2:"Need more information? Send us amessage via email",
        text3:"Send Message"

      },
    ];
  return (
    <div className="contactIconsBody">
      <div className="contactIconsInner">
        {data.map((e) => (
          <div className="contactIconsDiv" style={{ height: e.hg, width:e.wd}}>
            <div className="commentIcon">
              <img src={e.img} alt="" />
            </div>
            <div className="commentIconText">
              <div className="chatUsDiv">{e.text1}</div>
              <div className="ourFaqDiv">
                <p className="IconPTag">
                  {e.text2}
                </p>
              </div>
              <div className="startChatDiv">{e.text3}</div>
            </div>
          </div>
        ))}
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ContactsIcons