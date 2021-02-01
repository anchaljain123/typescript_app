import React, { useEffect, useRef } from "react";
import { cardStyle, textStyles, subTextStyles, crossStyle, tickStyle, circleStyle } from './constant/style'
import { Asset } from './constant';


type CardProps = {
    detail: Asset;
    action: string;
    style: React.CSSProperties;
    itemNo: number;
    handleClk: (action: string) => {};
    handleList: (action: string, detail: Asset) => {};
}

const Card = ({ detail, handleList, itemNo }: CardProps) => {
    const cardRef = useRef<HTMLInputElement>(null);

    const handleClk = (action: string) => {
        if (cardRef && cardRef.current) {
            cardRef.current.style.display = 'none';
        }
        handleList(action, detail)
    }
    // zIndex: itemNo, top: -2 * itemNo, width: `calc(100% - ${3 * itemNo})`
    return (
        <div ref={cardRef} style={{ position: 'absolute' }}>
            <div style={{ ...cardStyle, }}>
                <div>
                    <img src={detail.image} style={{
                        width: 'auto',
                        height: '250px'
                    }} alt="Logo" />
                </div>
                <span style={textStyles}>{detail.athleteName}</span>
                <span style={{ ...textStyles, ...subTextStyles }}>{detail.assetName}</span>
                {/*  */}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flex: 1,
                padding: '50px 0px'
            }}>
                <button onClick={e => handleClk('remove')} style={crossStyle}>
                    <span>X</span>
                </button>
                <button onClick={(e) => handleClk('add')} style={circleStyle}>
                    <div style={tickStyle} />
                </button>
            </div>
        </div>
    )
}

export default Card;