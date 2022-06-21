import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  margin-top: 62px;
  text-align: center;
  padding-bottom: 32px;
  h1 {
    color: ${({ theme }) => theme.colors.orangeColorContraste};
    margin-bottom: 20px;
    font-size: 22px;
    text-transform: uppercase;
  }

  hr {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  .ultimos-servicos--card {
    background: ${({ theme }) => theme.colors.backgroundContr};
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.2);
    margin-bottom: 12px;
    padding: 5px 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-radius: 8px;
    font-size: 14px;
    img {
      border-radius: 5%;
      width: 40px;
    }
  }
  .title-ultimo--servicos {
    margin-top: 62px;
  }
  .call-to--action {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 62px;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 200px;
      height: 40px;
      font-weight: bold;
      font-size: 22px;
      box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 500px) {
    font-size: 12px;
    flex-direction: column;
    h1 {
      font-size: 18px;
    }

    .ultimos-servicos--card {
      padding: 20px 9px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        margin-right: 12px;
      }
    }

    .btn {
      button {
        width: 60%;
        height: 40px;
        font-size: 18px;
      }
    }
  }

  .react-calendar {
    width: 750px;
    max-width: 100%;
    background: #292525;
    border: none;
    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-bottom: 32px;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar__viewContainer {
    color: #fff;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  abbr[title] {
    text-decoration: none !important;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    color: #f8812a;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #f8812a;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile:disabled {
    background-color: #757575;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 6px;
    background-color: #fff;
  }
  .react-calendar__tile--now {
    border-radius: 6px;
    background: #fff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #fff;
  }
  .react-calendar__tile--hasActive {
    background: #fff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8812a;
    color: #fff;
  }
  .react-calendar__tile--active {
    background: #f8812a;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #f8812a;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #fff;
  }
  .react-calendar__navigation__label {
    color: #f8812a;
    text-transform: uppercase;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;
  }
  .react-calendar__navigation__arrow {
    color: #f8812a;
    width: 20px;
    font-size: 22px;
    border-radius: 8px;
  }
  .react-calendar__month-view__days__day {
    padding: 20px;
    font-size: 18px;
  }
`;
