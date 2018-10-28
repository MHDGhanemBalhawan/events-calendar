--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

-- Started on 2018-10-28 13:17:00 GMT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE events_calendar;
--
-- TOC entry 2174 (class 1262 OID 16384)
-- Name: events_calendar; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE events_calendar WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_GB.UTF-8' LC_CTYPE = 'en_GB.UTF-8';


\connect events_calendar

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12393)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2176 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 16632)
-- Name: events_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.events_tbl (
    event_id integer NOT NULL,
    lesson character varying(55),
    event_date date,
    description text
);


--
-- TOC entry 183 (class 1259 OID 16638)
-- Name: events_tbl_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.events_tbl_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2177 (class 0 OID 0)
-- Dependencies: 183
-- Name: events_tbl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.events_tbl_id_seq OWNED BY public.events_tbl.event_id;


--
-- TOC entry 184 (class 1259 OID 16640)
-- Name: floaters_events_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.floaters_events_tbl (
    floaters_events_id integer NOT NULL,
    event_id integer NOT NULL,
    floater_id integer NOT NULL
);


--
-- TOC entry 185 (class 1259 OID 16643)
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_events_tbl_floaters_events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2178 (class 0 OID 0)
-- Dependencies: 185
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.floaters_events_tbl_floaters_events_id_seq OWNED BY public.floaters_events_tbl.floaters_events_id;


--
-- TOC entry 186 (class 1259 OID 16675)
-- Name: floaters_tbl; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.floaters_tbl (
    floater_id integer NOT NULL,
    floater_fname character(255),
    floater_surname character(255),
    floater_email character varying(255)
);


--
-- TOC entry 187 (class 1259 OID 16681)
-- Name: floaters_floaters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_floaters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2179 (class 0 OID 0)
-- Dependencies: 187
-- Name: floaters_floaters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.floaters_floaters_id_seq OWNED BY public.floaters_tbl.floater_id;


--
-- TOC entry 181 (class 1259 OID 16546)
-- Name: floaters_tbl_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.floaters_tbl_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2034 (class 2604 OID 16718)
-- Name: event_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events_tbl ALTER COLUMN event_id SET DEFAULT nextval('public.events_tbl_id_seq'::regclass);


--
-- TOC entry 2035 (class 2604 OID 16719)
-- Name: floaters_events_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl ALTER COLUMN floaters_events_id SET DEFAULT nextval('public.floaters_events_tbl_floaters_events_id_seq'::regclass);


--
-- TOC entry 2036 (class 2604 OID 16720)
-- Name: floater_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_tbl ALTER COLUMN floater_id SET DEFAULT nextval('public.floaters_floaters_id_seq'::regclass);


--
-- TOC entry 2163 (class 0 OID 16632)
-- Dependencies: 182
-- Data for Name: events_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (24, 'html-2', '2018-09-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (25, 'Javascript-4', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (26, 'Javascript-4', '2018-10-17', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (27, 'Javascript-6', '2018-10-25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (28, 'React-1', '2018-11-01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (30, 'React-3', '2018-11-25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (31, 'Database', '2018-11-27', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (29, 'React-2', '2018-11-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (32, 'MongoDB', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (34, 'SQL', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (35, 'Postgres', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (36, 'API', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (37, 'React-4', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (38, 'React-5', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (40, 'React-6', '2018-10-10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (44, 'React-22', '2018-12-22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (46, 'Javascript-20', NULL, 'Updated Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (47, 'Javascript-20', '2018-01-01', 'Updated Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (45, 'Dramatic', NULL, 'Updated Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
INSERT INTO public.events_tbl (event_id, lesson, event_date, description) VALUES (48, 'node', '2018-01-01', 'Updated Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');


--
-- TOC entry 2180 (class 0 OID 0)
-- Dependencies: 183
-- Name: events_tbl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.events_tbl_id_seq', 48, true);


--
-- TOC entry 2165 (class 0 OID 16640)
-- Dependencies: 184
-- Data for Name: floaters_events_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (21, 25, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (20, 27, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (28, 30, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (29, 31, 5);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (30, 31, 2);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (33, 27, 2);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (34, 25, 2);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (35, 30, 2);
INSERT INTO public.floaters_events_tbl (floaters_events_id, event_id, floater_id) VALUES (36, 31, 3);


--
-- TOC entry 2181 (class 0 OID 0)
-- Dependencies: 185
-- Name: floaters_events_tbl_floaters_events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_events_tbl_floaters_events_id_seq', 12, true);


--
-- TOC entry 2182 (class 0 OID 0)
-- Dependencies: 187
-- Name: floaters_floaters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_floaters_id_seq', 6, true);


--
-- TOC entry 2167 (class 0 OID 16675)
-- Dependencies: 186
-- Data for Name: floaters_tbl; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (2, 'Naty                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'nsmith@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (3, 'Nadine                                                                                                                                                                                                                                                         ', 'Dodo                                                                                                                                                                                                                                                           ', 'nadine@hotmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (4, 'Tony                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'tony@gmail.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (5, 'Naty                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'nsmith@yahoo.com');
INSERT INTO public.floaters_tbl (floater_id, floater_fname, floater_surname, floater_email) VALUES (6, 'Naty                                                                                                                                                                                                                                                           ', 'Smith                                                                                                                                                                                                                                                          ', 'nsmith@yahoo.com');


--
-- TOC entry 2183 (class 0 OID 0)
-- Dependencies: 181
-- Name: floaters_tbl_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.floaters_tbl_seq', 1, false);


--
-- TOC entry 2038 (class 2606 OID 16657)
-- Name: events_tbl_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.events_tbl
    ADD CONSTRAINT events_tbl_pkey PRIMARY KEY (event_id);


--
-- TOC entry 2045 (class 2606 OID 16687)
-- Name: floater_id_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_tbl
    ADD CONSTRAINT floater_id_pkey PRIMARY KEY (floater_id);


--
-- TOC entry 2041 (class 2606 OID 16661)
-- Name: floaters_events_id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT floaters_events_id PRIMARY KEY (floaters_events_id);


--
-- TOC entry 2043 (class 2606 OID 16663)
-- Name: unique_event_floater; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT unique_event_floater UNIQUE (event_id, floater_id);


--
-- TOC entry 2039 (class 1259 OID 16664)
-- Name: fki_event_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_event_id ON public.floaters_events_tbl USING btree (event_id);


--
-- TOC entry 2047 (class 2606 OID 16723)
-- Name: event_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT event_id FOREIGN KEY (event_id) REFERENCES public.events_tbl(event_id) ON DELETE CASCADE;


--
-- TOC entry 2046 (class 2606 OID 16706)
-- Name: floater_id; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.floaters_events_tbl
    ADD CONSTRAINT floater_id FOREIGN KEY (floater_id) REFERENCES public.floaters_tbl(floater_id);


-- Completed on 2018-10-28 13:17:00 GMT

--
-- PostgreSQL database dump complete
--

