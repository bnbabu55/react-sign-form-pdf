import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  h1: {
    fontSize: "36pt",
    fontWeight: "bold",
    paddingBottom: "24pt",
    textAlign: "center",
  },
  h2: {
    fontSize: "24pt",
    fontWeight: "bold",
    paddingBottom: "18pt",
    textAlign: "center",
  },
  h3: {
    fontSize: "18pt",
    fontWeight: "bold",
    paddingBottom: "18pt",
  },
  para: {
    fontSize: "14pt",
    paddingBottom: "18pt",
  },
  image: {
    width: 300,
    height: 70,
  },
});

// Create Document Component
const ConsentForm = ({ name, date, signature }) => {
  console.log(name, date, signature);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Marathon Health</Text>
          <Text style={styles.h2}>Consent Form</Text>
          <Text style={styles.h3}>What is Lorem Ipsum?</Text>
          <Text style={styles.para}>
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
          <Text style={styles.h3}>Why do we use it?</Text>
          <Text style={styles.para}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
          <Text style={styles.h3}>Where does it come from?</Text>
          <Text style={styles.para}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Text>
          <Text style={styles.para}>Name: {name}</Text>
          <Text style={styles.para}>Date: {date}</Text>
          <Text style={styles.para}>Signature:</Text>
          <Image src={signature} style={styles.image} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.h1}>Marathon Health</Text>
          <Text style={styles.h2}>Consent Form</Text>
          <Text style={styles.para}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Text>
          <Text style={styles.h3}>Where can I get some?</Text>
          <Text style={styles.para}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </Text>
          <Text style={styles.para}>Name: {name}</Text>
          <Text style={styles.para}>Date: {date}</Text>
          <Text style={styles.para}>Signature:</Text>
          <Image src={signature} style={styles.image} />
        </View>
      </Page>
    </Document>
  );
};

export default ConsentForm;
