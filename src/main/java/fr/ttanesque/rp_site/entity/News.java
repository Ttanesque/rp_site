package fr.ttanesque.rp_site.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class News {
    /**
     * Primary key id.
     */
    private @Id @GeneratedValue Long id;
    private String title;
    private String previewImage;
    private String htmlText;
    
    public News() {}

    public News(String title, String previewImage, String htmlText) {
        this.title = title;
        this.previewImage = previewImage;
        this.htmlText = htmlText;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPreviewImage() {
        return previewImage;
    }

    public void setPreviewImage(String previewImage) {
        this.previewImage = previewImage;
    }

    public String getHtmlText() {
        return htmlText;
    }

    public void setHtmlText(String htmlText) {
        this.htmlText = htmlText;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((htmlText == null) ? 0 : htmlText.hashCode());
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((previewImage == null) ? 0 : previewImage.hashCode());
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        News other = (News) obj;
        if (htmlText == null) {
            if (other.htmlText != null)
                return false;
        } else if (!htmlText.equals(other.htmlText))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (previewImage == null) {
            if (other.previewImage != null)
                return false;
        } else if (!previewImage.equals(other.previewImage))
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "News{"
            + "htmlText=" + htmlText
            + ", id=" + id
            + ", previewImage=" + previewImage
            + ", title=" + title
            + ";}";
    }

    

}
