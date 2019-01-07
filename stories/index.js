import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notes } from '../src/components/Notes';
import { DateAndShare } from '../src/components/DateAndShare';
import { Tags } from '../src/components/Tags';
import { PostType } from '../src/components/PostType';

const responceText = {
    posts: {
        blog_name: "citriccomics",
        id: 3507845453,
        post_url: "http:\/\/citriccomics.tumblr.com\/post\/3507845453",
        type: "text",
        date: "2011-02-25 20:27:00 GMT",
        timestamp: 1298665620,
        state: "published",
        format: "html",
        reblog_key: "b0baQtsl",
        tags: [
            "tumblrize",
            "milky dog",
            "mini comic"
        ],
        note_count: 14,
        title: "Milky Dog",
        body: `<p><img src=https://via.placeholder.com/150/"\/><a href=\"http:\/\
        /citriccomics.com\/blog\/?p=487\" target=\"_blank\">TO READ
        THE REST CLICK HERE<\/a><br\/>\n\nMilky Dog was inspired by
        something <a href=\"http:\/\/gunadie.com\/naomi\"
        target=\"_blank\">Naomi Gee<\/a> wrote on twitter, I really
        liked the hash tag <a href=\"http:\/\/twitter.com\/
        search?q=%23MILKYDOG\" target=\"_blank\">#milkydog<\/a>
        and quickly came up with a little comic about it. You can
        (and should) follow Naomi on twitter <a href=\"http:\/\
        /twitter.com\/ngun\" target=\"_blank\">@ngun<\/a> I'm on
        twitter as well <a href=\"http:\/\/twitter.com\
        /weflewairplanes\"target=\"_blank\">@weflewairplanes<\/a>
        <\/p>\n\nAlso, if youâ€™re a Reddit user (or even if
        you're not) I submitted this there, if you could up vote
        it I'd be super grateful just <a href=\"http:\/\
        /tinyurl.com\/5wj3tqz\" target=\"_blank\">CLICK HERE<\/a>`
    }
}

const responcePhoto = {
    posts: {
        blog_name: "citriccomics",
        id: 3507845453,
        post_url: "http:\/\/citriccomics.tumblr.com\/post\/3507845453",
        type: "photo",
        date: "2011-02-25 20:27:00 GMT",
        timestamp: 1298665620,
        state: "published",
        format: "html",
        reblog_key: "b0baQtsl",
        tags: [
            "tumblrize",
            "milky dog",
            "mini comic"
        ],
        note_count: 18,
        caption: "<p>my arm is getting tired.<\/p>",
        photos: [
            {
                caption: "",
                alt_sizes: [
                    {
                        width: 1280,
                        height: 722,
                        url: "https://via.placeholder.com/150/"
                    }
                ]
            },
            {
                caption: "",
                alt_sizes: [
                    {
                        width: 1280,
                        height: 722,
                        url: "https://via.placeholder.com/150/"
                    }
                ]
            }
        ]
    },
}

const responceVideo = {
    posts: {
        blog_name: "citriccomics",
        id: 3507845453,
        post_url: "http:\/\/citriccomics.tumblr.com\/post\/3507845453",
        type: "video",
        date: "2011-02-25 20:27:00 GMT",
        timestamp: 1298665620,
        state: "published",
        format: "html",
        reblog_key: "b0baQtsl",
        tags: [
            "tumblrize",
            "milky dog",
            "mini comic"
        ],
        note_count: 18,
        source_url: "http:\/\/www.WatchMojo.com",
            source_title: "WatchMojo.com",
            caption: `<p><a href=\"http:\/\/foreverneilyoung.tumblr.com\/
            post\/6522738445\" target=\"_blank\">foreverneilyoung<\/a>:
            <\/p>\n<blockquote>\n<p><a href=\"http:\/\/watchmojo.tumblr.com\/
            post\/6521201320\" target=\"_blank\">watchmojo<\/a>:<\/p>\n
            <blockquote>\n<p>Neil Young\u2019s live album \u201cA Treasure\
            u201d is available today. To celebrate, we take a look at the
            life and career of the Canadian singer-songwriter.
            <\/p>\n<\/blockquote>\n<p>Neil 101 for you new fans out
            there.<\/p>\n<\/blockquote>\n<p><strong>If you don't
            know\/appreciate Neil Young's impressive body of work,
            this will help<\/strong><\/p>`,
        player: [
            {
                width: 250,
                embed_code: `<object width=\"248\" height=\"169\"><param
                name=\"movie\" value=\"http:\/\/www.youtube.com\/embed\/WggtOfPTiUQ\"><\/param><param name=\"wmode\"
                value=\"transparent\"><\/param><param name=\"
                allowFullScreen\" value=\"true\"><\/param><embed
                src=\"http:\/\/www.youtube.com\/embed\/WggtOfPTiUQ\" type=\"application\/x-shockwave-flash\"
                width=\"248\" height=\"169\" allowFullScreen=\"true\"
                wmode=\"transparent\"><\/embed><\/object>`
            },
        ]
    },
}

storiesOf('Components', module)
    .add("Notes (correct)", () => (
        <Notes number={265} />
    ))
    .add("Notes (wrong format)", () => (
        <Notes number="test" />
    ))
    .add("Notes (empty)", () => (
        <Notes number="" />
    ))
    .add('Date and Share (correct)', () => (
        <DateAndShare date="2011-02-25 20:27:00 GMT" />
    ))
    .add('Date and Share (wrong format)', () => (
        <DateAndShare date="test" />
    ))
    .add('Date and Share (empty)', () => (
        <DateAndShare date="" />
    ))
    .add('Tags (correct)', () => (
        <Tags tags={["tumblrize",
            "milky dog",
            "mini comic"]} />
    ))
    .add('Tags (empty)', () => (
        <Tags />
    ))
    .add('Tags (wrong type)', () => (
        <Tags tags={[1, 2, 3]} />
    ))
    .add('Post (type text)', () => (
        <PostType post={responceText} />
    ))
    .add('Post (type image)', () => (
        <PostType post={responcePhoto} />
    ))
    .add('Post (type video)', () => (
        <PostType post={responceVideo} />
    ))
