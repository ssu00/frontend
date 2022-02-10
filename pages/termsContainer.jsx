import {useState,useEffect} from 'react'
import styles from "./terms.module.scss";
import BlueBtn from "../components/signup/button";
import router from "next/router";
const termsContainer = () => {
    const [disable1, setDisable1] = useState(true);
    const [disable2, setDisable2] = useState(true);
    const [disable3, setDisable3] = useState(true);
    const [allDisable,setAllDisable] = useState(true);

    useEffect(() => {
        if(!disable1 && !disable2 && !disable3){
            setAllDisable(false)
        }else{
            setAllDisable(true)
        }
    },[disable1,disable2,disable3])
   
    const setAllChange = () =>{
        setDisable1(!disable1)
        setDisable2(!disable2)
        setDisable3(!disable3)
    }
    return (
        <section className={styles.termSection}>
        <section style={{marginTop:300}}>

            <button style={{width:350,height:50,borderColor:'#689afd',backgroundColor:'#fff',borderRadius:5}} onClick={setAllChange}>전체 동의</button>
            <div style={{marginTop:100}}>
                <div>
                    <input  type="checkbox" id="cb1" onChange={() => setDisable1(!disable1)} checked={!disable1}/>
                    <label  htmlFor="cb1" >이용약관 </label><span style={{"cursor": "pointer"}} onClick={() => router.push("/terms")}>[보기]</span>
                </div>
                <input type="checkbox" id="agree" onChange={() => setDisable2(!disable2)} checked={!disable2} />
                <label htmlFor="agree" >
                개인정보 처리 방침
                </label>
                <span style={{"cursor": "pointer"}} onClick={() => router.push("/terms2")}>[보기]</span>
                <div>
                    <input  type="checkbox" id="cb2" onChange={() => setDisable3(!disable3)} checked={!disable3} />
                    <label  htmlFor="cb2" >악의적 콘텐츠 제한 동의</label>
                    <label className={styles.agreement}>
                    <div>튜터랩은 건강하고 합법적인 콘텐츠를 지향합니다.</div>
                    <p>다음과 같은 콘텐츠를 업로드한 이용자는 경고 또는 서비스 제한을 받을 수 있습니다.</p>
                    <div>1.음란 콘텐츠</div>
                    <div>2.폭력적 콘텐츠</div>
                    <div>3.타인의 권리를 침해하는 콘텐츠</div>
                    <div>4.기타 튜터랩 운영에 방해가 되는 콘텐츠</div>
                    <p>악의적 콘텐츠로 판단되는 콘텐츠가 발견되면 적극적인 신고를 부탁드립니다.</p>
                    </label>
                </div>
            </div>
        </section>
        
        <div className={styles.fixedTab}>
          <BlueBtn
            text={"다음"}
            onClick={() => router.push("/signup")}
            disable={allDisable}
          />
        </div>
      </section>
    )
}

export default termsContainer
