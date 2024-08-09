// Componenet is a class
import { Component } from 'react';
import styles from './ClassGreeting.module.css';

class ClassGreeting extends Component {
    render() {
        return <p className={ styles.greeting }>This is a class-based greeting!</p>;
    }
}

export default ClassGreeting;