import styles from '../styles/FretboardDiagram.module.css';

const FretboardDiagram = () => {
    return (
        <div className={styles.diagram}>
            <div className={styles.fret}></div>
            <div className={styles.noteRow}>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
            </div>
            <div className={styles.fret}></div>
            <div className={styles.noteRow}>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
            </div>
            <div className={styles.fret}></div>
            <div className={styles.noteRow}>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
            </div>
            <div className={styles.fret}></div>
            <div className={styles.noteRow}>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
                <div className={styles.note}></div>
            </div>
            <div className={styles.fret}></div>
        </div>
    );
};

export default FretboardDiagram;