# Upload in DB
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033 MD040 MD042 MD001 MD051 MD025-->
## Image Upload in DB

### Class

```cpp
using System;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Data;
public partial class ImageUploader : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    protected void btnView_Click(object sender, EventArgs e)
    {
        if (Session["CUR_PAT_ID"] != null)
        {
            SqlConnection cn = null;
            SqlCommand cmd = null;
            string connectionString = ConfigurationManager.ConnectionStrings["TSDBConnectionString"].ConnectionString;
            cn = new SqlConnection(connectionString);
            cmd = new SqlCommand();
            cmd.Connection = cn;
            cmd.CommandType = CommandType.Text;
            string query = string.Format("Select Photo from PatientImages where PAT_ID = '{0}'", Session["CUR_PAT_ID"].ToString());
            cmd.CommandText = query;
            if (cn.State == ConnectionState.Closed)
                cn.Open();
            SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
           
            if (reader.FieldCount > 0)
            {
                while (reader.Read())
                {
                    var imgage = reader["Photo"];
                    if (imgage != null)
                    {
                      //Satish  imgPatient.Value = imgage;
                    }
                }
            }
        }
    }

    private int SaveImage(byte[] image)
    {
        int rowsAffected = 0;
        string connectionString = ConfigurationManager.ConnectionStrings["TSDBConnectionString"].ConnectionString;
        try
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = "INSERT INTO PatientImages (Photo, PAT_ID, ENT_ID, SITE_ID) VALUES (@Photo, @PAT_ID, @ENT_ID, @SITE_ID)";
                    command.Parameters.AddWithValue("@Photo", image);
                    command.Parameters.AddWithValue("@PAT_ID", Session["CUR_PAT_ID"].ToString());
                    command.Parameters.AddWithValue("@ENT_ID", Session["ENT_ID"].ToString());
                    command.Parameters.AddWithValue("@SITE_ID", Session["SITE_ID"].ToString());
                    connection.Open();
                    rowsAffected = command.ExecuteNonQuery();
                }
            }
        }
        catch (Exception ex)
        {
            //Message.Text = ex.Message;
            Message.Text = "Image already uploaded for patient";
            return rowsAffected;
        }
        Message.Text = "Image saved successfully";
        return rowsAffected;
    }
    protected void btnUpload_Click(object sender, EventArgs e)
    {
         if (FileUpload1.HasFile)
            {            
                using (BinaryReader reader = new BinaryReader(FileUpload1.PostedFile.InputStream))
                {
                    byte[] image = reader.ReadBytes(FileUpload1.PostedFile.ContentLength);
                    SaveImage(image);
                }
            }          
        }   
}
```

### DB script

```sql
CREATE TABLE [dbo].[PatientImages](
     [PAT_ID] [varchar](30) NOT NULL,
     [PAT_IMG_ID] [varchar](30) NOT NULL,
     [Photo] [image] NULL,
     [BarCode] [image] NULL,
     [Vitals] [image] NULL,
     [C1] [image] NULL,
     [C2] [image] NULL,
     [C3] [image] NULL,
     [C4] [image] NULL,
     [SITE_ID] [nchar](10) NOT NULL,
     [ENT_ID] [nchar](10) NOT NULL,
     [Doc] [varbinary](max) NULL,
     [FileType] [varchar](20) NULL,
     [FileName] [varchar](20) NULL)
```

## File Upload in DB

### Class

```cpp
using System;
using System.IO;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

public partial class Document : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    private int SaveDoc(byte[] Doc, string FileType, string FileName)
    //private int SaveImage(byte[] Doc)
    {
        int rowsAffected = 0;
        string connectionString = ConfigurationManager.ConnectionStrings["TSDBConnectionString"].ConnectionString;
        try
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = "INSERT INTO PatientImages (PAT_ID, ENT_ID, SITE_ID,Doc, FileType, FileName) VALUES (@PAT_ID, @ENT_ID, @SITE_ID, @Doc, @FileType, @FileName)";
                    command.Parameters.AddWithValue("@Doc", Doc);
                    command.Parameters.AddWithValue("@PAT_ID", Session["CUR_PAT_ID"].ToString());
                    command.Parameters.AddWithValue("@ENT_ID", Session["ENT_ID"].ToString());
                    command.Parameters.AddWithValue("@SITE_ID", Session["SITE_ID"].ToString());
                    command.Parameters.AddWithValue("@FileType", FileType);
                    command.Parameters.AddWithValue("@FileName", FileName);
                    connection.Open();
                    rowsAffected = command.ExecuteNonQuery();
                }
               
            }
        }
        catch (Exception ex)
        {
            //Message.Text = ex.Message;
            Message.Text = "Doc already uploaded for patient";
            return rowsAffected;
        }
        Message.Text = "Doc saved successfully";
        return rowsAffected;
    }
    protected void btnUpload_Click(object sender, EventArgs e)
    {
        if (FileUpload1.HasFile)
        {
                   
            int len = FileUpload1.PostedFile.ContentLength;
            string fileType = FileUpload1.PostedFile.ContentType;
            string fileName = FileUpload1.PostedFile.FileName;
            byte[] doc = new byte[len];
            FileUpload1.PostedFile.InputStream.Read(doc, 0, len);
            SaveDoc(doc, fileType, fileName);
        }
     }
    protected void DownLoadFile_Click(object sender, EventArgs e)
    {
        if (Session["CUR_PAT_ID"] != null)
        {
            SqlConnection cn = null;
            SqlCommand cmd = null;
            string connectionString = ConfigurationManager.ConnectionStrings["TSDBConnectionString"].ConnectionString;
            cn = new SqlConnection(connectionString);
            cmd = new SqlCommand();
            cmd.Connection = cn;
            cmd.CommandType = CommandType.Text;
            string query = string.Format("Select Doc from PatientImages where PAT_ID = '{0}'", Session["CUR_PAT_ID"].ToString());
            cmd.CommandText = query;
            //Satish//
            //byte[] getContent = new byte[(int)FileSize];
            //sourceFile.Read(getContent, 0, (int)sourceFile.Length);
            //sourceFile.Close();
            //Response.BinaryWrite(getContent);
            if (cn.State == ConnectionState.Closed)
            cn.Open();
            SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            if (reader.FieldCount > 0)
            {
                while (reader.Read())
                {
                    var Doc = reader["Doc"];
                    if (Doc != null)
                    {
                       
                    }
                }
            }
        }
    }
}

//byte[] getContent = new byte[(int)FileSize];
//sourceFile.Read(getContent, 0, (int)sourceFile.Length);        
//sourceFile.Close();        
//Response.BinaryWrite(getContent);

```
