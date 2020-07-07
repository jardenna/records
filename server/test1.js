import React from 'react';

import Options from '@components/Selectbox/Options';
import Values from '@components/Selectbox/Values';

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: [],
            focusedValue: -1,
            isOpen: false,
            typed: ''
        };


    }

    onBlur = () => {
        const { options, multiple } = this.props;

        this.setState(prevState => {
            const { values } = prevState;

            if (multiple) {
                return {
                    focusedValue: -1,

                    isOpen: false
                };
            } else {
                const value = values[0];

                let focusedValue = -1;

                if (value) {
                    focusedValue = options.findIndex(option => option.value === value);
                }

                return {
                    focusedValue,

                    isOpen: false
                };
            }
        });
    }

    onKeyDown = (e) => {
        const { options, multiple } = this.props;
        const { isOpen } = this.state;

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
    }

    onClick = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    onDeleteOption = (e) => {
        const { value } = e.currentTarget.dataset;

        this.setState(prevState => {
            const [...values] = prevState.values;
            const index = values.indexOf(value);

            values.splice(index, 1);

            return { values };
        });
    }

    onClickOption = (e) => {
        const { multiple } = this.props;

        const { value } = e.currentTarget.dataset;

        this.setState(prevState => {
            if (!multiple) {
                return {
                    values: [value],
                    isOpen: false
                };
            }

            const [...values] = prevState.values;
            const index = values.indexOf(value);

            if (index === -1) {
                values.push(value);
            } else {
                values.splice(index, 1);
            }

            return { values };
        });
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        const { label, options, multiple, placeholder } = this.props;
        const { isOpen, values, focusedValue } = this.state;

        return (
            <div
                className="select"
                tabIndex="0"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
            >
                <label className="label">{label}</label>
                <div className="selection" onClick={this.onClick}>
                    <Values
                        placeholder={placeholder}
                        multiple={multiple}
                        values={values}
                        stopPropagation={this.stopPropagation}
                        onDeleteOption={this.onDeleteOption}
                    />

                    <span className={`arrow ${isOpen ? 'chevron-up' : 'chevron-down'}`} />

                </div>
                <Options
                    options={options}
                    isOpen={isOpen}
                    multiple={multiple}
                    values={values}
                    focusedValue={focusedValue}
                    onClick={this.onClickOption}
                />
            </div>
        );
    }
}


export default Select;