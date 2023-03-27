import './styles/TriggerList/TriggersList.css'
import imgShild from '../assets/images/Main-images/shild.png'
import imgBag from '../assets/images/Main-images/bag.png'
import imgTime from '../assets/images/Main-images/time.png'
import Trigger from './Trigger';

const TriggersList = () => {
    const titles: string[] = ['защита', 'твоё Будущее', 'Бизнес предложения']
    return (
        <div className="TriggersList">
            <Trigger imgPath={imgShild} title = 'защита' buttonText='себя и близких' buttonTextTwo='сотрудников' titles={titles}/>
            <Trigger imgPath={imgTime} title = 'твоё Будущее' buttonText='позаботься о будущем' titles={titles}/>
            <Trigger imgPath={imgBag} title = 'Бизнес предложения'buttonText='узнать больше' titles={titles} />
        </div>
    );
};

export default TriggersList;