import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccesories } from '../../../features/accessoriesSlice';
import styles from './Accessories.module.css';

const Accessories = () => {
    const accessories = useSelector((state) => state.accessories.accessories);
    const loading = useSelector((state) => state.accessories.loading);
    const error = useSelector((state) => state.accessories.error);
    const id = useSelector((state) => state.categories.category);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAccesories({ categoryId: id }));
    }, [dispatch, id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <div className={styles.loader}></div>;
      }    

    return (
        <div className={styles.main}>
            {accessories.map((accessory) => {
                return (
                    <div className={styles.accessory}>
                        <input type='radio' name='accessory' className={styles.radioInput}/>
                        {accessory.name}
                    </div>

                )
            })}
        </div>
    );
};

export default Accessories;