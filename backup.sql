--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

-- Started on 2019-06-16 17:56:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2813 (class 1262 OID 16463)
-- Name: Stock_tracking_app; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Stock_tracking_app" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


ALTER DATABASE "Stock_tracking_app" OWNER TO postgres;

\connect "Stock_tracking_app"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16476)
-- Name: bank; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bank (
    currency integer
);


ALTER TABLE public.bank OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16479)
-- Name: stocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stocks (
    company character varying(255) NOT NULL,
    shares integer,
    username character varying(25) NOT NULL
);


ALTER TABLE public.stocks OWNER TO postgres;

-- Completed on 2019-06-16 17:56:00

--
-- PostgreSQL database dump complete
--

