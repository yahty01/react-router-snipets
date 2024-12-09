import s from "./style.module.css"
import {Link} from "react-router-dom";
import {PATH} from "../../../app/routes/path";
import {useNavigate} from "react-router";

//todo: При переходе на private route, навигация перестает работать!
export const StepNavigator = () => {
  const navigate = useNavigate();

  return (
    <div className={s.HorizontalNavigation}>
      <Link className={s.LinkLikeButton} to={PATH.WELCOME}>go main</Link>
      <button className={s.ButtonLikeLink} onClick={()=>navigate(-1)}>←</button>
      <button className={s.ButtonLikeLink} onClick={()=>navigate(+1)}>→</button>
    </div>
  );
};