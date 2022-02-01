import React,{ useState, useEffect }  from 'react'
import { Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
// import Diffjp from '../Bars/Diffjp';
import Sides from './Sidebar'
import Button from 'react-bootstrap/Button'

function Jpbasic () {
  const [width, setWindowWidth] = useState(0)
  const [padding, setWindowpadding] = useState(0)
  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    if (width < 998) {
      setWindowpadding(4)
    } else {
      setWindowpadding(18)
    }
  }

  
  const righ = {
    padding: '0 0 0 '+padding+'rem',
  };
  return (
    <div>
      <Sides />
      <Helmet>
        <title>
          Difference Between Java and Python Basic tutorial For Beginners
        </title>
        <meta
          name='description'
          content='Difference Between Java and Python Basic tutorial for beginners.CodeExampler provides Multiple Programming Examples for Beginners,CodeExampler provides Free Online Tutorials for beginners and  questions of all technology like java tutorial, python tutorial,python tutorial for beginners in deeply knowledge With Deeply'
        />
        <meta
          name='keywords'
          content='codeexampler,programming language,Basic,tutorial for begineers,Difference Between Java and Python,Difference between program and code,java tutorial for begineers,python tutorial for begineers,C# tutorial for begineers,code,exampler,which online website to learn code,Difference Between Java and python tutorial,code,exampler,java vs python basic,java vs Csharp(C#),basic'
        />
        <link
          rel='canonical'
          href='https://www.codeexampler.com/java-vs-python-basic'
        />
      </Helmet>

      <div className='righ' style={righ}>
        <h1 className='m-4 mh1 '>Difference Between Java and Python Basic</h1>
        <div className='first'>
          <a href='/java-vs-python-if'>
            <Button className='cd' variant='primary' size='lg'>
              {' '}
              Next &#62;
            </Button>{' '}
          </a>
        </div>
        <h2 className='mt-4 mh2'>Java Basic Programme Steps</h2>
        <p className='mt-4 para'>
          1, Firstly the name of the source file should be an:{' '}
          <span className='bold'>basis_example.java</span>
          <br />
          2, The Java compiler requires that the source file use. Java filename
          extension. <br />
          3, After going inside the program <br />
          4, Write a class keyword to declare a new class <br />
          5, Basis_example is an identifier and also this is the name of the
          class
          <br />
          6, Inside this class we create a body between the opening curly
          braces( &#123; ) and close by curly braces( &#125; ).
          <br />
          7, This is a very important line in the java program <br />
          <span className='bold'>Public static void main(string args[]) </span>
          <br />
          8, The public is access –modifier keyword. The public allows the
          program to access the visibility of class members.
          <br />
          9, Static is also a keyword .static keyword by the use of JVM call
          directly main () method without creating any object means no need to
          create an object
          <br />
          10, Void this is also a keyword and role of the void is that compile
          the main() without return a value
          <br />
          <span className='bold'>Main()</span> <br />
          *This is a pre-defined method.
          <br />
          *String is also a class.
          <br />
          *String is used with the main method because the string is immutable
          and other thing is that all programming process in the form of string
          <br />
          11, Args is an argument
          <br />
          12, In the next line:
          <br />
          13, The system is a predefined class that provides access to the
          system
          <br />
          14, Out this, is the output stream that is connected to the console
          <br />
          15, We show output by the use of{' '}
          <span className='bold'>println()</span> method.
          <span className='bold'> Println()</span> display the string which is
          passed to it
          <br />
        </p>

        <h3 className='mt-4'>Java syntax</h3>

        <Card className='inde' border='primary m-4'>
          <Card.Header as='h5'>Java syntax Example</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                <span className='re'>Access</span> modifier class{' '}
                <span className='yl'> className</span>
                <br />
                &#123;
                <br />
                <span className='gr'>body</span>
                <br />
                &#125;
                <br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <h3 className='mt-4'>Python syntax</h3>

        <Card className='inde' border='primary m-4'>
          <Card.Header as='h5'>Python syntax Example</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                <span className='gr'>body</span>
                <br />
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <h2 className='mt-4 mh2'>Java Basic Example</h2>

        <Card className='inde' border='primary m-4'>
          <Card.Header as='h5'>Java Basic Example</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                {' '}
                <span className='bl'> public</span> class{' '}
                <span className='re'>Basic_example</span>&#47;&#47;{' '}
                <span className='yl'>class</span> is a{' '}
                <span className='gr'> keyword</span>
                <br />
                &#123;
                <br />
                <span className='bl'>public</span> static void main(String[]
                args)
                <br />
                &#123;
                <br />
                System.out.<span className='yl'>println</span>("This is the java
                simple program");
                <br />
                &#125;
                <br />
                &#125;
                <br />
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            Output-
            <br />
            This is the java simple program
          </Card.Footer>
        </Card>

        <h2 className='mt-4 mh2'>Python Basic Example</h2>

        <Card className='inde' border='primary m-4'>
          <Card.Header as='h5'>Python Simple String example</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                <span className='yl'>print</span>("hello codeExampler");
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            Output-
            <br />
            hello codeExampler
          </Card.Footer>
        </Card>
        <h1 className='mt-5'> </h1>
        <div className='back'>
          <a href='/java-vs-python-if'>
            {' '}
            <Button className='cd' variant='primary' size='lg'>
              {' '}
              Next &#62;
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Jpbasic
