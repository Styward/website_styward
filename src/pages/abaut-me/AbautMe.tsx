import './AboutMe.css';
import {Skills} from '../../data/Skills';

const AbautMe: React.FC = () => {

    return (
        <>
            <div className="contain-main-home">
                <div className="standard-subtitle"><u>About Me</u></div>

                <div className='row'>
                    <div className='col-md-12' style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
                        <div className="contain-img-profile">
                            <img
                                src=".\src\assets\img\Foto-StywardCampo.jpeg"
                                alt="Profile"
                                style={{
                                    height: '250px',
                                    width: '200px',
                                    borderRadius: '40%',
                                    objectFit: 'cover' // Ajusta la imagen sin distorsionarla
                                }}
                            />
                        </div>
                    </div>
                    <div className='col-md-12'>
                <p className="standard-text-p" style={{ padding: '0 60px 0 40px', textAlign:'justify' }}>
                    Hello I'm Styward Campo Computer Engineering from Institución universitaria Colegio Mayor Del Cauca,
                    tecnical specialize in Management and security in data bases. I have experience whit development back-end
                    and front-end but i feel most comfortable working in the back-end. I like learn news tecnologies and work
                    in projects that contain Artificial intelligent (AI).
                </p>
                    </div>
                    <div className='col-md-12' style={{marginRight:'30px'}}>
                        <table className='group-table-aboutMe'>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Description</th>
                                    <th>Tecnology / Language</th>
                                </tr>
                            </thead>

                            <tbody style={{ maxHeight: '400px', overflowY: 'auto', display: 'block' }}>
                                {Skills.map((value, index) =>(
                                    <tr key={index}>
                                        <td>{value.skill}</td>
                                        <td>{value.description}</td>
                                        <td>{value.tools}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </>
    );

};

export default AbautMe;