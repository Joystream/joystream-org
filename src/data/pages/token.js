import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

const tokenQuestions = [
    {
        title: "token.faq.whatIsTJoy.title",
        text: "token.faq.whatIsTJoy.text"
    },
    {
        title: "token.faq.tJoyValueOrigin.title",
        text: "token.faq.tJoyValueOrigin.text"
    },
    {
        title: "token.faq.purposeOfTJoy.title",
        text: {
            isModular: true,
            key: "token.faq.purposeOfTJoy.text",
            components: [<br />]
        }
    },
    {
        title: "token.faq.whereCanTJoyBeObtained.title",
        text: "token.faq.whereCanTJoyBeObtained.text"
    },
    {
        title: "token.faq.linkBetweenTJoyAndFutureToken.title",
        text: "token.faq.linkBetweenTJoyAndFutureToken.text"
    },
    {
        title: "token.faq.howToCashout.title",
        text: {
            isModular: true,
            key: "token.faq.howToCashout.text",
            components: [<strong/>, <br/>, <a href='https://github.com/Joystream/helpdesk'>here</a>]
        }
    },
    {
        title: "token.faq.howToEarn.title",
        text: {
            isModular : true,
            key : "token.faq.howToEarn.text",
            components : [<a href='https://joystream.gitbook.io/testnet-workspace/testnet/founding-member-program' target="_blank">Founding Member Program</a>]
        }
    },
    {
        title: "token.faq.TJoyWorth.title",
        text: "token.faq.TJoyWorth.text"
    }
]

export default tokenQuestions;