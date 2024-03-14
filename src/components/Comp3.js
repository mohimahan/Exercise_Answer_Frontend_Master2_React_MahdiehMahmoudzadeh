import React, { Component } from 'react';
import cake from "../images/pink-cake.jpg";
import '../styles/myStyle.css'

class Comp3 extends Component {
    render() {
        return (
            <div className='comp3'>
                <div className='comp3-left'>
                   <img  className='comp3-img' src={cake} alt=''/>
                </div>
                <div className='comp3-right'>
                    <h1 className='h1'>درباره ما</h1>
                    <p className='p' dir="rtl">قنادی گل رز با بیش از80 سال تجربه
                         در صنعت کیک و شیرینی فعالیت خود را با رویکردی نو و متفاوت در حوزه پخت و عرضه
                         شیرینی های خانگی با هدف ترویج تغذیه سالم و مناسب تمامی افراد خانواده آغاز کرده است.
                         در این راستا با ارائه محصولات با کیفیت عالی و بدون مواد نگهدارنده و مواد اولیه مصنوعی و صنعتی
                         توانسته ایم مخاطبان زیادی را در رده های مختلف سنی راضی نگه داریم . مجموعه گل رز در حال
                         حاضر در 2 شعبه واقع در خیابان بهاران معالی آباد و ابریشمی درتهران مشغول به خدمتگزاری
                         و ارائه محصول به شما عزیزان می باشد امید آن داریم تا با لطف خدا و همراهی شما با خلاقیت
                         و نوآوری و ارائه محصولات متمایز و تلفیق هنر و عشق مادرانه با علم روز بتوانیم سهم کوچکی
                         در شیرین کردن لحظات شاد و ماندگار شما داشته باشیم.</p>
                </div>

            </div>
        )
    } 
}

export default Comp3