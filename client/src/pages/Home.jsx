import { useState, useEffect } from "react";
import {
  Input,
  Checkbox,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Home() {
  const [password, setPassword] = useState("Generate a password");
  const [passSize, setPassSize] = useState(16);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({
    upper: true,
    lower: true,
    special: true,
    nums: true,
  });
  const [copied, setCopyStatus] = useState(false);
  let special_chars = "!@#$%^&*()";
  let nums = "0123456789";
  let upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower_chars = "abcdefghijklmnopqrstuvwxyz";
  let chars = nums + upper_chars + lower_chars + special_chars;
  function generatePassword() {
    let password = "";
    let size = passSize;

    for (let i = 0; i < size; i++) {
      let char = chars[Math.floor(Math.random() * chars.length)];
      if (special_chars.includes(char) && !data.special) {
        size++;
        continue;
      }
      if (lower_chars.includes(char) && !data.lower) {
        size++;
        continue;
      }
      if (upper_chars.includes(char) && !data.upper) {
        size++;
        continue;
      }
      if (nums.includes(char) && !data.nums) {
        size++;
        continue;
      }
      password += char;
    }

    setPassword(password);
    setCopyStatus(false);
  }

  // Generate Password When Page is Loaded
  useEffect(() => {
    if (!loaded) {
      generatePassword();
    }
    setLoaded(true);
  });

  function checkBox(event) {
    event.preventDefault();
    console.log(data);
    let is_checked = event.target.checked;
    let data_name = event.target.name;
    console.log(is_checked);
    data[data_name] = is_checked;
    setData(data);
  }

  function reportpasswordStrength() {
    if (passSize >= 6 && passSize < 15) return "Weak";
    if (passSize >= 16 && passSize <= 128) return "Strong";
    if (passSize > 128 && passSize < 256) return "Hard";
    if (passSize > 256) return "Very Hard";
  }

  return (
    <>
      <div className="main">
        <Input type="text" value={password} className="password" readOnly />
        <Checkbox
          name="upper"
          onChange={(event) => {
            checkBox(event);
          }}
          defaultChecked
        >
          Uppercase
        </Checkbox>

        <Checkbox
          name="lower"
          onChange={(event) => {
            checkBox(event);
          }}
          defaultChecked
        >
          LowerCase
        </Checkbox>

        <Checkbox
          name="nums"
          onChange={(event) => {
            checkBox(event);
          }}
          defaultChecked
        >
          Numbers
        </Checkbox>

        <Checkbox
          name="special"
          onChange={(event) => {
            checkBox(event);
          }}
          defaultChecked
        >
          Special Symbols
        </Checkbox>

        <Flex>
          <Text as="b" flex="1">
            Password Length:
          </Text>
          <Text as="i">{reportpasswordStrength()}</Text>
        </Flex>
        <Slider
          defaultValue={16}
          min={6}
          max={2048}
          onChange={(event) => {
            setPassSize(event);
          }}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text as="b">
          {passSize}/{2048}
        </Text>
        <Center>
          <Button colorScheme="twitter" onClick={generatePassword}>
            Generate Password
          </Button>
          <CopyToClipboard text={password} onCopy={() => setCopyStatus(true)}>
            <Button colorScheme="gray" m={2}>
              {copied ? "Copied" : "Copy"}
            </Button>
          </CopyToClipboard>
        </Center>
      </div>
    </>
  );
}

export default Home;
