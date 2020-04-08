import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AppBar, Box, CircularProgress, Container, Fab, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './style';
import Article from '../../components/article';
import ArticleSkeleton from '../../components/article-skeleton';
import ScrollTop from '../../components/scroll-top';
import { API_KEY } from '../../utils/constants';
import { TOP_HEADLINES_API } from '../../utils/api';

const Home = (props) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState('ph');
  const [category, setCategory] = useState('all category');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    getTopHeadlines();
  }, [country, category]);

  const getTopHeadlines = () => {
    setIsLoading(prevIsLoading => !prevIsLoading);
    axios.get(TOP_HEADLINES_API, {
      params: {
        country,
        category : category === 'all category' ? '' : category,
        q : keyword,
        pageSize: 100,
        apiKey : API_KEY
      }
    }).then(response => {
      setIsLoading(prevIsLoading => !prevIsLoading);

      setTotalResults(response.data.totalResults);
      setArticles(response.data.articles);
    }).catch(error => {
      setIsLoading(prevIsLoading => !prevIsLoading);
    });
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };
  
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      getTopHeadlines();
    }
  }

  const handleSearchkeyword = () => {
    getTopHeadlines();
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar id="back-to-top-anchor" >
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box textAlign="right">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={country}
              onChange={handleCountryChange}
              label="Category"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={'ar'}>Argentina</MenuItem>
              <MenuItem value={'at'}>Austria</MenuItem>
              <MenuItem value={'au'}>Australia</MenuItem>
              <MenuItem value={'be'}>Belgium</MenuItem>
              <MenuItem value={'br'}>Brazil</MenuItem>
              <MenuItem value={'bg'}>Bulgaria</MenuItem>
              <MenuItem value={'ca'}>Canada</MenuItem>
              <MenuItem value={'cn'}>China</MenuItem>
              <MenuItem value={'co'}>Columbia</MenuItem>
              <MenuItem value={'cu'}>Cuba</MenuItem>
              <MenuItem value={'cz'}>Czech Republic</MenuItem>
              <MenuItem value={'eg'}>Egypt</MenuItem>
              <MenuItem value={'fr'}>France</MenuItem>
              <MenuItem value={'de'}>Germany</MenuItem>
              <MenuItem value={'gr'}>Greece</MenuItem>
              <MenuItem value={'hk'}>Hongkong</MenuItem>
              <MenuItem value={'hu'}>Hungary</MenuItem>
              <MenuItem value={'in'}>India</MenuItem>
              <MenuItem value={'id'}>Indonesia</MenuItem>
              <MenuItem value={'ie'}>Ireland</MenuItem>
              <MenuItem value={'il'}>Israel</MenuItem>
              <MenuItem value={'it'}>Italy</MenuItem>
              <MenuItem value={'jp'}>Japan</MenuItem>
              <MenuItem value={'lv'}>Latvia</MenuItem>
              <MenuItem value={'lt'}>Lithuania</MenuItem>
              <MenuItem value={'my'}>Malaysia</MenuItem>
              <MenuItem value={'mx'}>Mexico</MenuItem>
              <MenuItem value={'ma'}>Morocco</MenuItem>
              <MenuItem value={'nl'}>Netherlands</MenuItem>
              <MenuItem value={'ng'}>Nigeria</MenuItem>
              <MenuItem value={'nz'}>New Zealand</MenuItem>
              <MenuItem value={'no'}>Norway</MenuItem>
              <MenuItem value={'ph'}>Philippines</MenuItem>
              <MenuItem value={'pl'}>Poland</MenuItem>
              <MenuItem value={'pt'}>Portugal</MenuItem>
              <MenuItem value={'ro'}>Romania</MenuItem>
              <MenuItem value={'ru'}>Russian Federation</MenuItem>
              <MenuItem value={'sa'}>Saudi Arabia</MenuItem>
              <MenuItem value={'rs'}>Serbia</MenuItem>
              <MenuItem value={'sg'}>Singapore</MenuItem>
              <MenuItem value={'sk'}>Slovakia</MenuItem>
              <MenuItem value={'si'}>Slovenia</MenuItem>
              <MenuItem value={'za'}>South Africa</MenuItem>
              <MenuItem value={'kr'}>South Korea</MenuItem>
              <MenuItem value={'ch'}>Switzerland</MenuItem>
              <MenuItem value={'se'}>Sweden</MenuItem>
              <MenuItem value={'tw'}>Taiwan</MenuItem>
              <MenuItem value={'th'}>Thailand</MenuItem>
              <MenuItem value={'tr'}>Turkey</MenuItem>
              <MenuItem value={'ua'}>Ukraine</MenuItem>
              <MenuItem value={'ae'}>United Arab Emirates</MenuItem>
              <MenuItem value={'gb'}>United Kingdom</MenuItem>
              <MenuItem value={'us'}>United States of America</MenuItem>
              <MenuItem value={'ve'}>Venezuela</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={'all category'}>All Category</MenuItem>
              <MenuItem value={'business'}>Business</MenuItem>
              <MenuItem value={'entertainment'}>Entertainment</MenuItem>
              <MenuItem value={'general'}>General</MenuItem>
              <MenuItem value={'health'}>Health</MenuItem>
              <MenuItem value={'science'}>Science</MenuItem>
              <MenuItem value={'sports'}>Sports</MenuItem>
              <MenuItem value={'technology'}>Technology</MenuItem>
            </Select>
          </FormControl>
          <TextField 
            className={classes.formControl} 
            label="Keyword" 
            variant="outlined" 
            onChange={handleKeywordChange}
            onKeyPress={handleSearchKeyPress}
            value={keyword}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSearchkeyword}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
              </InputAdornment>
            }}
          />
        </Box>
        {
          isLoading ? 
            <Typography paragraph variant="h6" align="center">
              <CircularProgress />
            </Typography>
          :
            totalResults > 0 ?
              <Typography paragraph variant="h6" align="center">{`You have ${totalResults} ${totalResults > 1 ? 'articles' : 'article'} found.`}</Typography>
            :
              <Typography paragraph variant="h6" align="center">No articles found</Typography>
        }
        <Grid container spacing={3}>
          {
            isLoading ?
              Array.from({length: Math.random() * (6) + 1 }, () => 1).map((value, index) => 
                <ArticleSkeleton key={index}/>
              )
            :
              articles.map((value, index) => 
                <Article {...value} key={index}/>
              )
          }
        </Grid>
      </Container>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}

export default Home;