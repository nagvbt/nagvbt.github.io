# LINQ
## LINQ Statement Format
```
Format:


from <variable of type held in collection> in <the collection> 
where <criteria> 
orderby <criteria>     
select <property from selected item>
```

### Example
```cpp
        void Refresh()
        {
            PubsDatabaseModelClassesDataContext pubs = new PubsDatabaseModelClassesDataContext ();
            //Balaji: Show authors
            var authorQuery = from auth in pubs.authors
                              where auth.state == "CA"
                              orderby auth.au_lname
                              select auth;
            GridView1.DataSource = authorQuery;
            GridView1.DataBind();   
        }
        protected void btnInsert_Click(object sender, EventArgs e)
        {
            PubsDatabaseModelClassesDataContext pubs = new PubsDatabaseModelClassesDataContext ();
            author auth = new author();
            auth.au_id = "000-00-0005";
            auth.au_fname = "Monica";
            auth.au_lname = "Brink";
            auth.address = "555 Some St.";
            auth.state = "CA";
            auth.city = "Redmond";
            auth.contract = false;
            auth.phone = "555-1212";
            auth.zip = "12345";
           
            pubs.authors.InsertOnSubmit(auth);                   
            pubs.SubmitChanges();
            Refresh();
             
        }
        protected void btndelete_Click(object sender, EventArgs e)
        {
            PubsDatabaseModelClassesDataContext pubs = new PubsDatabaseModelClassesDataContext ();
            var authorQuery = from auth in pubs.authors
                              where auth.au_id == "000-00-0005"
                              select auth;
            foreach (var auth in authorQuery)
            {
                pubs.authors.DeleteOnSubmit(auth);
            }
            pubs.SubmitChanges();
            Refresh();
        }
        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            PubsDatabaseModelClassesDataContext pubs = new PubsDatabaseModelClassesDataContext ();
            var authorQuery = from auth in pubs.authors
                              where auth.au_id == "000-00-0005"
                              select auth;
           
            foreach (var auth in authorQuery)
            {
                auth.au_lname = "Balaji";
            }
            pubs.SubmitChanges();
            Refresh();
        }                      
```

## Linq to Entity

### Example

```cpp
        private void Refresh()
        {
            using (pubsEntities pubs = new pubsEntities())
            {
                var authQuery = from a in pubs.authors
                                where a.state == "CA"
                                orderby a.au_fname
                                select a;
                GridView1.DataSource = authQuery;
                GridView1.DataBind();
            }
        }
        protected void btnInsert_Click(object sender, EventArgs e)
        {
            using (pubsEntities pubs = new pubsEntities())
            {
                author auth = new author();
                auth.au_id = "000-00-0010";
                auth.au_fname = "Monica";
                auth.au_lname = "Brink";
                auth.address = "555 Some St.";
                auth.state = "CA";
                auth.city = "Redmond";
                auth.contract = false;
                auth.phone = "555-1212";
                auth.zip = "12345";
                pubs.authors.AddObject(auth);
                pubs.SaveChanges();
            }
            Refresh();
        }
        protected void btnDelete_Click(object sender, EventArgs e)
        {
            using (pubsEntities pubs = new pubsEntities())
            {
                var authorQuery = from auth in pubs.authors
                                  where auth.au_id == "000-00-0010"
                                  select auth;
                foreach (var auth in authorQuery)
                {
                    pubs.authors.DeleteObject(auth);
                }
                pubs.SaveChanges();
            }
            Refresh();
        }
        protected void btnUpDate_Click(object sender, EventArgs e)
        {
            using (pubsEntities pubs = new pubsEntities())
            {
                author auth = (from a in pubs.authors
                                  where a.au_id == "000-00-0010"
                                  select a).Single();
               
                auth.au_lname = "Balaji";               
                pubs.SaveChanges();
                Refresh();
          }
       
        }

```