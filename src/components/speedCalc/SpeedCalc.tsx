import { useState } from 'react';
import styles from'./SpeedCalc.module.css';

function RenderCalc() {
    return (
        <>
            <div className={styles.calcContainer}>
                <div className={styles.propsContainer}>
                    <ul className={styles.calcProps}>
                        /* список из кнопок. кнопки - отдельный компонент */
                    </ul>
                </div>
                ZALUPA
            </div>
        </>
    )
}

const state = {
    frequency_band: [2.4, 5, 6],
    channel_width_mhz: [20, 40, 80, 160],
    mimo_config: ['2x2','3x3','4x4'], /* погуглить какие приколы работают */
    wifi_standard: {
        '4': 1212,
        '5': 1212,
        '6': 232131,
    },
    connected_devices: 1,
    isp_speed_mbps: 100,
    overhead_factor: 0.8, /* накладные расходы: протоколы, шум и т.п. */

}

function SpeedCalc() {
    
}

export { RenderCalc };