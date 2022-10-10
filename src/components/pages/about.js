// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
import cForm from '../util/cForm2.png';

export default class About extends Component {
  render() {
    return (
        <div className="auth-inner-aboutPage">
          {/* list of courses ,which smester  */}
          <form>
          <div className="homeformHeader">
          <img src={cForm} alt="cForm.png" className="imgForFormHome" />
              <br/><br/>
              <h3><i>&#10043;ABOUT US&#10043;<br/>
              <h6>Your Uni-compass AI prediction model</h6>
              </i></h3>
          </div>
          <p></p>
          <div className="my-mb-3">
          <label> &#10043; &#10043;&#10043;</label>
          <br/>
           <p>We are a group of University of Jordan students,
            Inspired by our experience with the difficulty of registering university 
            schedules that suit our abilities and circumstances in each semester we developed UniCompass.
            It is a site that relies mainly on artificial intelligence technology to evaluate the study schedules 
            registered for each student on the basis of difficulty and number of study hours,
            and to predict the expected grades for each subject that will be recorded within the chosen university schedule.
            </p>
            <p>
            نحن مجموعة من طلاب الجامعة الأردنية ، مستوحاة من تجربتنا مع صعوبة تسجيل الجداول الجامعية التي تناسب قدراتنا وظروفنا في كل فصل دراسي قمنا بتطوير UniCampas. هو موقع يعتمد بشكل أساسي على تقنية الذكاء الاصطناعي لتقييم الجداول الدراسية المسجلة لكل طالب على أساس الصعوبة وعدد ساعات الدراسة ، والتنبؤ بالدرجات المتوقعة لكل مادة والتي سيتم تسجيلها ضمن جدول الجامعة المختار.
            </p>

          </div>
        </form>
      </div>
    )
  }
}
