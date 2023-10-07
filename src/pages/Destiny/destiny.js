import React, { useState} from 'react';
import MarsInfo from '../../utils/Mars/api-mars';
import JupiterInfo from '../../utils/Jupiter/api-jupiter';
import Header from '../../components/Header/header';

function Destiny() {
    const [showInfoMars, setShowInfoMars] = useState(null);
    const [showInfoJupiter, setShowInfoJupiter] = useState(null);

    const toggleInfoMars = () => {setShowInfoMars(!showInfoMars) };
    const toggleInfoJupiter = () => {setShowInfoJupiter(!showInfoJupiter) };

    
    return (
        <div>
            <Header />
            <h1>Informações do Sistema Solar</h1>
            <div>
                <button onClick={toggleInfoMars}>Mars Info</button>
                {showInfoMars ? (
                    <div>
                        <MarsInfo />
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            <div>
            <button onClick={toggleInfoJupiter}>Jupiter Info</button>
            {showInfoJupiter ? (
                <div>
                    <JupiterInfo />
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>

        </div>
    );
}

export default Destiny;