switch (e.key) {
    case ' ':
        e.preventDefault();
        if (isOpen) {
            if (multiple) {
                this.setState(prevState => {
                    const { focusedValue } = prevState;

                    if (focusedValue !== -1) {
                        const [...values] = prevState.values;
                        const value = options[focusedValue].value;
                        const index = values.indexOf(value);

                        if (index === -1) {
                            values.push(value);
                        } else {
                            values.splice(index, 1);
                        }

                        return { values };
                    }
                });
            }
        } else {
            this.setState({
                isOpen: true
            });
        }
        break;
    case 'Escape':
    case 'Tab':
        if (isOpen) {
            e.preventDefault();
            this.setState({
                isOpen: false
            });
        }
        break;
    case 'Enter':
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
        break;
    case 'ArrowDown':
        e.preventDefault();


        this.setState(prevState => {
            let { focusedValue } = prevState;

            if (focusedValue < options.length - 1) {
                focusedValue++;

                if (multiple) {
                    return {
                        focusedValue
                    };
                } else {
                    return {
                        values: [options[focusedValue].value],
                        focusedValue
                    };
                }
            }
        });
        break;
    case 'ArrowUp':
        e.preventDefault();
        this.setState(prevState => {
            let { focusedValue } = prevState;

            if (focusedValue > 0) {
                focusedValue--;

                if (multiple) {
                    return {
                        focusedValue
                    };
                } else {
                    return {
                        values: [options[focusedValue].value],
                        focusedValue
                    };
                }
            }
        });
        break;
    default:
        if (/^[a-z0-9]$/i.test(e.key)) {
            const char = e.key;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({
                    typed: ''
                });
            }, 1000);

            this.setState(prevState => {
                const typed = prevState.typed + char;
                const re = new RegExp(`^${typed}`, 'i');
                const index = options.findIndex(option => re.test(option.value));

                if (index === -1) {
                    return {
                        typed
                    };
                }

                if (multiple) {
                    return {
                        focusedValue: index,
                        typed
                    };
                } else {
                    return {
                        values: [options[index].value],
                        focusedValue: index,
                        typed
                    };
                }
            });
        }
        break;
}