--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

-- Started on 2019-08-18 15:08:17

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
-- TOC entry 2967 (class 1262 OID 16485)
-- Name: dadm6n51qbgptr; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE dadm6n51qbgptr WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


ALTER DATABASE dadm6n51qbgptr OWNER TO postgres;

\connect dadm6n51qbgptr

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
-- TOC entry 2 (class 3079 OID 16495)
-- Name: citext; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- TOC entry 2968 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- TOC entry 264 (class 1255 OID 16677)
-- Name: update_holdings(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_holdings() RETURNS trigger
    LANGUAGE plpgsql
    AS $$begin
if OLD.symbol IS NULL then
	INSERT INTO holdings (account_id, symbol, shares) VALUES (new.account_id, new.symbol, new.shares);
	end if;
	return new;
	end
$$;


ALTER FUNCTION public.update_holdings() OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 201 (class 1259 OID 16625)
-- Name: account_balance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.account_balance (
    user_id integer NOT NULL,
    account_id integer NOT NULL,
    account_balance numeric NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.account_balance OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16623)
-- Name: account_balance_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_balance_account_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_balance_account_id_seq OWNER TO postgres;

--
-- TOC entry 2969 (class 0 OID 0)
-- Dependencies: 200
-- Name: account_balance_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_balance_account_id_seq OWNED BY public.account_balance.account_id;


--
-- TOC entry 199 (class 1259 OID 16621)
-- Name: account_balance_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.account_balance_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_balance_user_id_seq OWNER TO postgres;

--
-- TOC entry 2970 (class 0 OID 0)
-- Dependencies: 199
-- Name: account_balance_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.account_balance_user_id_seq OWNED BY public.account_balance.user_id;


--
-- TOC entry 207 (class 1259 OID 16767)
-- Name: historical_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historical_data (
    history_id integer NOT NULL,
    account_id integer,
    holding_value numeric NOT NULL,
    date_holding character varying(25) DEFAULT to_char(((now())::date)::timestamp with time zone, 'Mon dd'::text)
);


ALTER TABLE public.historical_data OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16765)
-- Name: historical_data_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.historical_data_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.historical_data_history_id_seq OWNER TO postgres;

--
-- TOC entry 2971 (class 0 OID 0)
-- Dependencies: 206
-- Name: historical_data_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.historical_data_history_id_seq OWNED BY public.historical_data.history_id;


--
-- TOC entry 205 (class 1259 OID 16655)
-- Name: holdings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.holdings (
    holding_id integer NOT NULL,
    account_id integer NOT NULL,
    symbol character varying(25) NOT NULL,
    shares integer NOT NULL,
    created_date timestamp without time zone DEFAULT now(),
    value_at_purchase numeric DEFAULT 100 NOT NULL,
    company_name character varying(255) DEFAULT 'bob ross'::character varying NOT NULL
);


ALTER TABLE public.holdings OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16653)
-- Name: holdings_holding_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.holdings_holding_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.holdings_holding_id_seq OWNER TO postgres;

--
-- TOC entry 2972 (class 0 OID 0)
-- Dependencies: 204
-- Name: holdings_holding_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.holdings_holding_id_seq OWNED BY public.holdings.holding_id;


--
-- TOC entry 203 (class 1259 OID 16635)
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    transaction_id integer NOT NULL,
    account_id integer NOT NULL,
    symbol character varying(10) NOT NULL,
    type character varying(10) NOT NULL,
    stock_price numeric NOT NULL,
    transaction_date timestamp without time zone DEFAULT now(),
    shares integer NOT NULL
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16633)
-- Name: transactions_transaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transactions_transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_transaction_id_seq OWNER TO postgres;

--
-- TOC entry 2973 (class 0 OID 0)
-- Dependencies: 202
-- Name: transactions_transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transactions_transaction_id_seq OWNED BY public.transactions.transaction_id;


--
-- TOC entry 198 (class 1259 OID 16614)
-- Name: user_accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_accounts (
    user_id integer NOT NULL,
    first_name character varying(25) NOT NULL,
    last_name character varying(25) NOT NULL,
    email character varying(35) NOT NULL,
    created_date timestamp without time zone DEFAULT now(),
    password character varying(25) DEFAULT 'badpassword'::character varying NOT NULL
);


ALTER TABLE public.user_accounts OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16612)
-- Name: user_accounts_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_accounts_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_accounts_user_id_seq OWNER TO postgres;

--
-- TOC entry 2974 (class 0 OID 0)
-- Dependencies: 197
-- Name: user_accounts_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_accounts_user_id_seq OWNED BY public.user_accounts.user_id;


--
-- TOC entry 2809 (class 2604 OID 16628)
-- Name: account_balance user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_balance ALTER COLUMN user_id SET DEFAULT nextval('public.account_balance_user_id_seq'::regclass);


--
-- TOC entry 2810 (class 2604 OID 16629)
-- Name: account_balance account_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_balance ALTER COLUMN account_id SET DEFAULT nextval('public.account_balance_account_id_seq'::regclass);


--
-- TOC entry 2818 (class 2604 OID 16770)
-- Name: historical_data history_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historical_data ALTER COLUMN history_id SET DEFAULT nextval('public.historical_data_history_id_seq'::regclass);


--
-- TOC entry 2814 (class 2604 OID 16658)
-- Name: holdings holding_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.holdings ALTER COLUMN holding_id SET DEFAULT nextval('public.holdings_holding_id_seq'::regclass);


--
-- TOC entry 2812 (class 2604 OID 16638)
-- Name: transactions transaction_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN transaction_id SET DEFAULT nextval('public.transactions_transaction_id_seq'::regclass);


--
-- TOC entry 2806 (class 2604 OID 16617)
-- Name: user_accounts user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts ALTER COLUMN user_id SET DEFAULT nextval('public.user_accounts_user_id_seq'::regclass);


--
-- TOC entry 2825 (class 2606 OID 16632)
-- Name: account_balance account_balance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_balance
    ADD CONSTRAINT account_balance_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2831 (class 2606 OID 16682)
-- Name: holdings account_symbol_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.holdings
    ADD CONSTRAINT account_symbol_unique UNIQUE (account_id, symbol);


--
-- TOC entry 2835 (class 2606 OID 16776)
-- Name: historical_data historical_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historical_data
    ADD CONSTRAINT historical_data_pkey PRIMARY KEY (history_id);


--
-- TOC entry 2833 (class 2606 OID 16661)
-- Name: holdings holdings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.holdings
    ADD CONSTRAINT holdings_pkey PRIMARY KEY (holding_id);


--
-- TOC entry 2829 (class 2606 OID 16641)
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id);


--
-- TOC entry 2827 (class 2606 OID 16652)
-- Name: account_balance unique_account_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_balance
    ADD CONSTRAINT unique_account_id UNIQUE (account_id);


--
-- TOC entry 2821 (class 2606 OID 16727)
-- Name: user_accounts unique_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- TOC entry 2823 (class 2606 OID 16620)
-- Name: user_accounts user_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT user_accounts_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2840 (class 2620 OID 16678)
-- Name: holdings update_stock_holdings; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_stock_holdings BEFORE UPDATE ON public.holdings FOR EACH ROW EXECUTE PROCEDURE public.update_holdings();


--
-- TOC entry 2837 (class 2606 OID 16743)
-- Name: transactions f_key_account_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT f_key_account_id FOREIGN KEY (account_id) REFERENCES public.account_balance(account_id) ON DELETE CASCADE;


--
-- TOC entry 2839 (class 2606 OID 16782)
-- Name: historical_data f_key_account_id_hist_data; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historical_data
    ADD CONSTRAINT f_key_account_id_hist_data FOREIGN KEY (account_id) REFERENCES public.user_accounts(user_id) ON DELETE CASCADE;


--
-- TOC entry 2836 (class 2606 OID 16733)
-- Name: account_balance f_key_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.account_balance
    ADD CONSTRAINT f_key_user_id FOREIGN KEY (user_id) REFERENCES public.user_accounts(user_id) ON DELETE CASCADE;


--
-- TOC entry 2838 (class 2606 OID 16738)
-- Name: holdings holdings_account_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.holdings
    ADD CONSTRAINT holdings_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account_balance(account_id) ON DELETE CASCADE;


-- Completed on 2019-08-18 15:08:18

--
-- PostgreSQL database dump complete
--

