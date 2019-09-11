package com.springboot.app.upload;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.springboot.app.model.Contractor;
import com.springboot.app.model.ContractorService;

import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
public class UploadController {
	
    //Save the uploaded file to this folder
    private static String UPLOADED_FOLDER = "D:\\Development\\event-booking\\frontEnd\\images\\avatars\\";
    @Autowired
    private ContractorService ContractorService;
    
//    @GetMapping("/")
//    public String index() {
//        return "upload";
//    }

    @RequestMapping(method=RequestMethod.POST,value="/upload") // //new annotation since 4.3
    public void singleFileUpload(@RequestParam("file") MultipartFile file,
                                   RedirectAttributes redirectAttributes,@RequestParam("id") Integer id) {

        if (file.isEmpty()) {
           redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
           // return "redirect:uploadStatus";
           //add to db 
        }

        try {

            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");
            Contractor con =ContractorService.getContractor(id);
            con.setavatar("..\\images\\avatars\\"+file.getOriginalFilename());
            ContractorService.updateContractor(id, con);

        } catch (IOException e) {
            e.printStackTrace();
        }

         
    }
  
    private static final String EXTENSION = ".jpg";
    private static final String SERVER_LOCATION = "..\\images\\avatars\\";

    @RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<ByteArrayResource> download(@RequestParam("image") String image) throws IOException {
        File file = new File(SERVER_LOCATION + File.separator + image + EXTENSION);

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=img.jpg");
        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");

        Path path = Paths.get(file.getAbsolutePath());
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(header)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }
//    @RequestMapping(value = "/Image/{id}", method = RequestMethod.GET)
//    public @ResponseBody byte[] getImage(@PathVariable("id") String id)
//    		throws IOException {
//    	
//        InputStream in = getClass()
//          .getResourceAsStream("C:\\Users\\V3790243\\Desktop\\ff\\" + id+".png");
//        
//        return IOUtils.toByteArray(in);
//    }

//    @GetMapping("/uploadStatus")
//    public String uploadStatus() {
//        return "uploadStatus";
//    }
    
}